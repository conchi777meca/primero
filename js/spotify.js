// --- 1. CONFIGURACIÓN ---
const CLIENT_ID = "da33e9c970654655a993fb65946d5f57"; // ¡IMPORTANTE! Reemplaza con tu Client ID de Spotify
const REDIRECT_URI = 'https://conchi777meca.github.io/primero/pages/spotify.html'; // ¡IMPORTANTE! Reemplaza con tu Redirect URI configurada en Spotify
const SCOPES = 'user-read-private user-read-email';
const SEARCH_QUERY = 'genre:pop rock clásico'; // La búsqueda que quieras hacer
const TRACK_LIMIT = 5;


// Función de utilidad para generar una cadena aleatoria
const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

// Función de utilidad para generar el "code challenge" a partir del "code verifier"
async function generateCodeChallenge(codeVerifier) {
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode(...new Uint8Array(digest)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

// Función de utilidad para convertir milisegundos a minutos:segundos
function msToMinutesSeconds(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// --- 2. FLUJO DE AUTORIZACIÓN (PKCE) ---

function redirectToSpotifyAuth() {
    const codeVerifier = generateRandomString(128);

    generateCodeChallenge(codeVerifier).then(codeChallenge => {
        // Almacena el verifier en localStorage para usarlo al recibir el callback
        localStorage.setItem('code_verifier', codeVerifier);

        const params = new URLSearchParams({
            response_type: 'code',
            client_id: CLIENT_ID,
            scope: SCOPES,
            redirect_uri: REDIRECT_URI,
            code_challenge_method: 'S256',
            code_challenge: codeChallenge,
        });

        window.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
    });
}

// Lógica de inicio al cargar la página
window.onload = () => {
    document.getElementById('login-button').addEventListener('click', redirectToSpotifyAuth);

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
        // Se recibió el código de autorización
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('search-section').style.display = 'block';
        getAccessToken(code);
    } else {
        // No hay código, mostrar botón de login
        document.getElementById('auth-section').style.display = 'block';
        document.getElementById('search-section').style.display = 'none';
    }
};

async function getAccessToken(code) {
    const codeVerifier = localStorage.getItem('code_verifier');

    const payload = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            client_id: CLIENT_ID,
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: REDIRECT_URI,
            code_verifier: codeVerifier,
        }),
    };

    try {
        const response = await fetch('https://accounts.spotify.com/api/token', payload);
        if (!response.ok) {
            throw new Error(`Error en la solicitud de token: ${response.status}`);
        }
        const data = await response.json();
        
        // El Access Token ya está disponible, ahora buscamos las canciones
        searchTracks(data.access_token);
    } catch (error) {
        console.error('Error al obtener el Access Token:', error);
        document.getElementById('results').innerHTML = `<p style="color:red;">Error de autenticación. Inténtalo de nuevo.</p>`;
    }
}


// --- 3. BÚSQUEDA Y EXTRACCIÓN DE DATOS ---

async function searchTracks(accessToken) {
    const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(SEARCH_QUERY)}&type=track&limit=${TRACK_LIMIT}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error(`Error en la búsqueda: ${response.status}`);
        }

        const data = await response.json();
        displayTracks(data.tracks.items);

    } catch (error) {
        console.error('Error al buscar canciones:', error);
        document.getElementById('results').innerHTML = `<p style="color:red;">Error al cargar las canciones.</p>`;
    }
}

// --- 4. RENDERIZADO DE RESULTADOS ---

function displayTracks(tracks) {
    const resultsDiv = document.getElementById('results');
    let htmlContent = '<h2>Lista de Canciones</h2>';

    if (tracks.length === 0) {
        htmlContent += '<p>No se encontraron canciones.</p>';
    } else {
        tracks.forEach(track => {
            const artists = track.artists.map(artist => artist.name).join(', ');
            const duration = msToMinutesSeconds(track.duration_ms);
            const trackUrl = track.external_urls.spotify;

            htmlContent += `
                <div class="track-item">
                    <h3>${track.name}</h3>
                    <p><strong>Autor(es):</strong> ${artists}</p>
                    <p><strong>Álbum:</strong> ${track.album.name}</p>
                    <p><strong>Tiempo:</strong> ${duration}</p>
                    <p><strong>URL:</strong> <a href="${trackUrl}" target="_blank">Escuchar en Spotify</a></p>
                </div>
            `;
        });
    }

    resultsDiv.innerHTML = htmlContent;
}
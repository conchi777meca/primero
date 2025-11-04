
// Función para crear la estructura HTML de un libro, necesita recibir un objeto "libro"
function crearElementoLibro(libro) {
    const divLibro = document.createElement('div');
    divLibro.className = 'libro';

    const title = document.createElement('h2');
    title.className = 'titulo';
    title.textContent = libro.title;

    const artist = document.createElement('p');
    artist.className = 'autor';
    // artist.textContent = libro.artist;
    artist.textContent = `Autor: ${libro.artist}`;

    const album = document.createElement('p');
    album.className = 'album';
    // album.textContent = libro.album;
    album.textContent = `Album: ${libro.album}`;

    const duration = document.createElement('p');
    // duration.textContent = libro.duration;
    duration.textContent = `Duración: ${libro.duration}`;

    const release_date = document.createElement('p');
    // release_date.textContent = libro.release_date;
    release_date.textContent = `Fecha: ${libro.release_date}`;
    // precio.className = 'precio';
    // precio.textContent = `$${libro.precio.toFixed(2)}`;

    const spotify_url = document.createElement('a');
    spotify_url.href = libro.spotify_url;           // Establece la URL
    spotify_url.textContent = `${libro.spotify_url}`; // Texto visible
    spotify_url.target = "_blank";                  // Abre en nueva pestaña
 
    divLibro.appendChild(title);
    divLibro.appendChild(artist);
    divLibro.appendChild(album);
    divLibro.appendChild(duration);
    divLibro.appendChild(release_date);
    divLibro.appendChild(spotify_url);
   

    // Retorna un elemento div libro
    return divLibro;
}

// Función asincrona recoger todos los datos del JSON
async function obtenerDatosJSON() {
    try {
        const respuesta = await fetch("./../data/musica.json"); //await para esperar la respuesta del fetch, la ruta es relativa al html, no a este documento
        return await respuesta.json();
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Error al cargar los datos');
    }
}

//Función asíncrona para cargar cada libro en la lista
async function cargarLibros() {
    try {
        // Selecciona el contenedor de los libros
        const contenedor = document.getElementById("lista-libros");

        // Recoge la respuesta de obtenerDatosJSON
       const datosLibros = await obtenerDatosJSON();

        // Por cada uno de los elementos del JSON, genera un elemento con crearElementoLibro()
        datosLibros.forEach(libro => {
            const elementoLibro = crearElementoLibro(libro);
            // Lo añade al contenedor principal
            contenedor.appendChild(elementoLibro);
        });

    } catch (error) {
        console.error('Error:', error);
    }
}



// Cargar los libros cuando se cargue la página
window.addEventListener('load', cargarLibros);
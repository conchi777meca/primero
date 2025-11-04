// Función para mostrar la imagen
function mostrarImagen(url) {
    const contenedorResultado = document.getElementById('resultado');
    const img = document.createElement('img');
    img.src = url;
    img.style.maxWidth = '100%';
    contenedorResultado.innerHTML = '';
    contenedorResultado.appendChild(img);
}

async function obtenerPerroAleatorio() {
    try {
        const respuesta = await fetch('https://dog.ceo/api/breeds/image/random');
        const datos = await respuesta.json();
        mostrarImagen(datos.message);

    } catch (error) {
        console.error('Error al obtener la imagen:', error);
        document.getElementById('resultado').textContent =
            'Hubo un error al obtener la imagen';
        throw new Error('Error en la respuesta');
    }
}

// Obtener una imagen aleatoria
document.getElementById('btn-random').addEventListener('click', obtenerPerroAleatorio);




//// Busqueda por Razas

// Recoger la lista de razas
async function cargarRazas() {
    try {
        const respuesta = await fetch('https://dog.ceo/api/breeds/list/all');
        const datos = await respuesta.json();

        const select = document.getElementById('raza');
        const razas = Object.keys(datos.message);

        razas.forEach(raza => {
            const option = document.createElement('option');
            option.value = raza;
            option.textContent = raza.charAt(0).toUpperCase() + raza.slice(1);
            select.appendChild(option);
        });
    } catch (error) {
        console.error('Error al cargar las razas:', error);
        document.getElementById('resultado').textContent = 'No se pudieron cargar las razas de perros.';
        return null;
    }
}

// Obtener una imagen aleatoria de perro por su raza
async function obtenerPerroRaza(raza) {
    try {
        const respuesta = await fetch(`https://dog.ceo/api/breed/${raza}/images/random`);
        const datos = await respuesta.json();

        return datos.status === 'success' ? datos.message : null;
    } catch (error) {
        console.error('Error al obtener la imagen:', error);
        document.getElementById('resultado').textContent = 'No se pudo obtener la imagen del perro.';
        return null;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    cargarRazas(); //al cargar la página recogemos y pintamos las razas en el select

    const form = document.getElementById('form-raza');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const select = document.getElementById('raza');
        const razaSeleccionada = select.value;

        const urlImagen = await obtenerPerroRaza(razaSeleccionada);

        if (urlImagen) {
            const contenedorResultado = document.getElementById('resultado');
            const img = document.createElement('img');
            img.src = urlImagen;
            img.alt = `Perro ${razaSeleccionada}`;
            img.style.maxWidth = '100%';
            contenedorResultado.innerHTML = '';
            contenedorResultado.appendChild(img);
        }
    });
});
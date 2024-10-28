document.addEventListener('DOMContentLoaded', function() {
    // Obtener el slug de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');

    if (slug) {
        // Ruta al JSON
        const jsonUrl = '../data/data.json';

        // Cargar el JSON y buscar el autor correspondiente al slug
        fetch(jsonUrl)
            .then(response => response.json())
            .then(data => {
                // Buscar el autor con el slug correspondiente
                const author = data.find(item => item.title.toLowerCase().replace(/\s+/g, '-') === slug);

                if (author) {
                    // Actualizar el título en div2 con título y énfasis
                    document.getElementById('author-title').textContent = author.title;
                    document.getElementById('author-enfasis').textContent = author.enfasis;

                    // Actualizar los datos en div3
                    document.getElementById('author-image').src = author.image;
                    document.getElementById('author-enfasis-desc').textContent = author.enfasis;

                    // Generar elementos de lista en div3
                    const listContainer = document.getElementById('author-list');
                    listContainer.innerHTML = ''; // Limpiar contenido previo, si lo hubiera
                    author.listItems.forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = item;
                        listContainer.appendChild(li);
                    });
                } else {
                    // Si no se encuentra el autor, mostrar un mensaje de error
                    document.getElementById('author-title').textContent = 'Autor no encontrado';
                    document.getElementById('author-enfasis').textContent = 'No se encontró información para este autor.';
                }
            })
            .catch(error => {
                console.error('Error cargando el JSON:', error);
            });
    } else {
        // Si no se proporciona un slug en la URL, mostrar un mensaje
        document.getElementById('author-title').textContent = 'Autor no especificado';
        document.getElementById('author-enfasis').textContent = 'Por favor, selecciona un autor válido desde la lista de pensadores.';
    }
});

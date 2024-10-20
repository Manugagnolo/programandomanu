document.addEventListener('DOMContentLoaded', function() {
    // Obtener los datos del archivo JSON
    fetch('../data/data.json')
        .then(response => response.json())
        .then(data => {
            const cardContainer = document.querySelector('.tarjeta');
            
            // Limpiar el contenido existente
            cardContainer.innerHTML = '';
            
            // Generar dinámicamente las tarjetas
            data.forEach(item => {
                // Crear un slug basado en el título del autor
                const slug = item.title.toLowerCase().replace(/\s+/g, '-');
                const pageLink = `${slug}.html`; // Enlace basado en el slug del autor

                const card = `
                    <div class="card-container">
                        <a href="/templates/${pageLink}" class="hero-image-container">
                            <img class="hero-image" src="${item.image}" alt="${item.title}" />
                        </a>
                        <main class="main-content">
                            <h1><a href="/templates/${pageLink}">${item.title}</a></h1>
                            <p>${item.description}</p>
                        </main>
                    </div>
                `;
                cardContainer.innerHTML += card;
            });
        })
        .catch(error => console.error('Error cargando el JSON:', error));
});

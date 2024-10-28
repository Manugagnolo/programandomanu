document.addEventListener('DOMContentLoaded', function() {

    fetch('../data/data.json')
    
    .then(response => response.json())
    
    .then(data => {
    
    const cardContainer = document.querySelector('.tarjeta');
    
    cardContainer.innerHTML = '';
    
    
    data.forEach(item => {
    
    const slug = item.title.toLowerCase().replace(/\s+/g, '-');
    
    
    const card = `
    
    <div class="card-container">
    
    <a href="/templates/autores.html?slug=${slug}" class="hero-image-container">
    
    <img class="hero-image" src="${item.image}" alt="${item.title}" />
    
    </a>
    
    <main class="main-content">
    
    <h1><a href="/templates/autores.html?slug=${slug}">${item.title}</a></h1>
    
    <p>${item.description}</p>
    
    </main>
    
    </div>
    
    `;
    
    cardContainer.innerHTML += card;
    
    });
    
    })
    
    .catch(error => console.error('Error cargando el JSON:', error));
    
    });
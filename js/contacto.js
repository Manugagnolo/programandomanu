document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Captura los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    // Muestra los datos capturados en el contenedor
    const formDataDisplay = document.getElementById("formDataDisplay");
    formDataDisplay.innerHTML = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
    `;

    // Opcional: Limpia el formulario después de mostrar los datos
    document.getElementById("contactForm").reset();
});

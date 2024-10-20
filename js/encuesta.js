document.getElementById('encuestaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario y la recarga de la página

    const form = new FormData(this); // Obtener los datos del formulario
    let temaSeleccionado = form.get('tema'); // Obtener el valor del tema seleccionado

    // Si se seleccionó la opción "Otro", obtener el valor ingresado en el campo de texto
    if (temaSeleccionado === 'otro') {
        temaSeleccionado = form.get('otro_tema') || 'Otro (sin especificar)';
    }

    // Mostrar el resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>El tema seleccionado es: <strong>${temaSeleccionado}</strong></p>`;
});

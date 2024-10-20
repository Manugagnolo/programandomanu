document.getElementById('triviaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe y recargue la página

    // Respuestas correctas
    const respuestasCorrectas = {
        'pregunta1': 'c',  // Émile Durkheim
        'pregunta2': 'b',  // Pierre Bourdieu
        'pregunta3': 'c'   // Nicos Poulantzas
    };

    // Obtener las respuestas del usuario
    const form = new FormData(this);
    let puntaje = 0;
    let totalPreguntas = Object.keys(respuestasCorrectas).length;

    // Comparar las respuestas del usuario con las correctas
    for (let pregunta in respuestasCorrectas) {
        if (form.get(pregunta) === respuestasCorrectas[pregunta]) {
            puntaje++;
        }
    }

    // Calcular el porcentaje de aciertos
    let porcentaje = (puntaje / totalPreguntas) * 100;

    // Mostrar el resultado con el porcentaje
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h2>Tu puntaje es: ${puntaje} / ${totalPreguntas}</h2> 
        <span>Porcentaje: ${porcentaje.toFixed(2)}%</span>
    `;
});

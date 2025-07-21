// Función que encuentra la palabra más larga en el texto ingresado
function findLongestWord(text) {
    // Para dividir el texto en palabras separadas por espacio
    const words = text.split(' ');
    let longestWord = '';

    // Lo uso para recorrer todas las palabras
    for (let i = 0; i < words.length; i++) {
        // Limpiar signos de puntuación comunes
        const cleanWord = words[i].replace(/[.,!?¡¿;:()"]/g, '');

        // Comparar longitudes
        if (cleanWord.length > longestWord.length) {
            longestWord = cleanWord;
        }
    }

    return longestWord;
}

// Función que se ejecuta al hacer clic en el botón
function mostrarPalabraMasLarga() {
    // Obtener el texto desde el textarea
    const texto = document.getElementById("inputText").value;

    // Verificar que no esté vacío
    if (texto.trim() === "") {
        document.getElementById("resultado").textContent = "Por favor, ingresa un texto.";
        return;
    }

    // Encontrar la palabra más larga
    const palabra = findLongestWord(texto);

    // Mostrar resultado
    document.getElementById("resultado").textContent = "La palabra más larga es: " + palabra;

    // También en consola
    console.log("La palabra más larga es:", palabra);
}
 
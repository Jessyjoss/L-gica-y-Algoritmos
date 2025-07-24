// Función principal: divide y conquista para encontrar el máximo
function findMax(arr) {
    if (arr.length === 1) {
        console.log(`[Base] Solo un número: ${arr[0]}`);
        return arr[0];
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    console.log(`[Dividir] Izquierda: [${left}] | Derecha: [${right}]`);

    const leftMax = findMax(left);
    const rightMax = findMax(right);

    const max = Math.max(leftMax, rightMax);
    console.log(`[Comparar] Máximo entre ${leftMax} y ${rightMax} es ${max}`);

    return max;
}

// Función conectada al botón HTML
function buscarMaximo() {
    const input = document.getElementById("inputNumeros").value;
    const resultadoElemento = document.getElementById("resultado");

    if (input.trim() === "") {
        resultadoElemento.textContent = "Por favor, ingresa algunos números.";
        console.log("[ERROR] Entrada vacía.");
        return;
    }

    // Convierte la cadena en arreglo de números
    const arreglo = input.split(",").map(num => parseFloat(num.trim()));

    // Valida que todos sean números
    if (arreglo.some(isNaN)) {
        resultadoElemento.textContent = "Solo se permiten números válidos separados por comas.";
        console.log("[ERROR] Entrada no numérica detectada.");
        return;
    }

    // Busca el número máximo con el divide and conquer
    console.log("🧐 Iniciando búsqueda del número máximo en:", arreglo);
    const maximo = findMax(arreglo);
    resultadoElemento.textContent = `✅ El número máximo es: ${maximo}`;
    console.log("✅ Resultado final:", maximo);
}

// Lista de regalos
const gifts = ["Microornito","Muñeca de Porcelana","Xbox 360", "Lampara", "Cocinita", "Bicleta", "Carrito de Juguete", "Plastilina", "Lego", "Pelota"];

// Función recursiva para buscar un regalo
function findGift(gifts, giftName, index = 0) {
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }

    return findGift(gifts, giftName, index + 1);
}

// Función para mostrar el resultado en la página y en consola
function buscarRegalo() {
    const input = document.getElementById("giftInput").value.trim();

    if (input === "") {
        const mensaje = "Por favor, ingresa el nombre de un regalo.";
        document.getElementById("resultado").textContent = mensaje;
        console.log("[INFO] " + mensaje);
        return;
    }

    const resultado = findGift(gifts, input);

    document.getElementById("resultado").textContent = resultado;
    console.log("[RESULTADO] Búsqueda del regalo:", input);
    console.log("[RESULTADO] " + resultado);
}

// Función para mostrar la lista de regalos en la interfaz
function mostrarListaDeRegalos() {
    const lista = document.getElementById("listaRegalos");
    gifts.forEach(regalo => {
        const item = document.createElement("li");
        item.textContent = regalo;
        lista.appendChild(item);
    });
}

// Mostrar lista automáticamente al cargar la página
document.addEventListener("DOMContentLoaded", mostrarListaDeRegalos);

const invitados = [
  "Carlos", "Cecilia", "Daniela", "Diego", "Rebeca", 
  "Esteban", "Federico", "Patricia", "Maria", "Monica"
];

function encontrarTodasLasParejas(arr) {
  const parejas = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const actual = arr[i];
    const siguiente = arr[i + 1];

    if (actual.charAt(0).toUpperCase() === siguiente.charAt(0).toUpperCase()) {
      const pareja = [actual, siguiente];
      parejas.push(pareja);

      // ✅ Mostrar cada pareja encontrada en consola
      console.log(`✔️ Pareja encontrada: ${pareja[0]} y ${pareja[1]}`);
    }
  }

  if (parejas.length === 0) {
    console.log("❌ No se encontraron parejas con la misma inicial.");
  }

  return parejas;
}

function mostrarParejasEnHTML(parejas) {
  const contenedor = document.getElementById("parejas");

  if (parejas.length === 0) {
    contenedor.innerHTML = "<p>No se encontraron parejas con la misma inicial.</p>";
    return;
  }

  parejas.forEach(par => {
    const div = document.createElement("div");
    div.classList.add("pareja");
    div.textContent = `🚻 ${par[0]} y ${par[1]}`;
    contenedor.appendChild(div);
  });
}

const parejasEncontradas = encontrarTodasLasParejas(invitados);

// ✅ Mostrar todas las parejas como arreglo también
console.log("🔎 Todas las parejas encontradas:", parejasEncontradas);

mostrarParejasEnHTML(parejasEncontradas);


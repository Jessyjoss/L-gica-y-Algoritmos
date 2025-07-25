const fs = require('fs');
const readline = require('readline');

const filePath = './notas.json';

// Función para cargar las notas desde el archivo
function cargarNotas() {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  }
  return [];
}

// Función para guardar notas en el archivo
function guardarNotas(notas) {
  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
}

// Función para agregar una nota
function agregarNota(titulo, contenido) {
  const notas = cargarNotas();
  notas.push({ titulo, contenido });
  guardarNotas(notas);
  console.log(`✅ Nota agregada: [${titulo}]`);
}

// Función para listar todas las notas
function listarNotas() {
  const notas = cargarNotas();
  if (notas.length === 0) {
    console.log('📭 No hay notas guardadas.');
    return;
  }

  console.log('📋 LISTADO DE NOTAS:');
  notas.forEach((nota, index) => {
    console.log(`${index + 1}. 📌 ${nota.titulo}: ${nota.contenido}`);
  });
}

// Función para eliminar una nota
function eliminarNota(titulo) {
  const notas = cargarNotas();
  const nuevasNotas = notas.filter(nota => nota.titulo !== titulo);
  if (notas.length === nuevasNotas.length) {
    console.log(`❌ Nota con título "${titulo}" no encontrada.`);
  } else {
    guardarNotas(nuevasNotas);
    console.log(`🗑️ Nota eliminada: ${titulo}`);
  }
}

// ==========================
// Menú Interactivo
// ==========================
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log('\n--- Gestor de Notas ---');
  console.log('1. Agregar nota');
  console.log('2. Ver notas');
  console.log('3. Eliminar nota');
  console.log('4. Salir');

  rl.question('Elige una opción (1-4): ', (opcion) => {
    switch (opcion) {
      case '1':
        rl.question('Título de la nota: ', (titulo) => {
          rl.question('Contenido de la nota: ', (contenido) => {
            agregarNota(titulo, contenido);
            mostrarMenu(); // vuelve al menú
          });
        });
        break;
      case '2':
        listarNotas();
        mostrarMenu();
        break;
      case '3':
        rl.question('Título de la nota a eliminar: ', (titulo) => {
          eliminarNota(titulo);
          mostrarMenu();
        });
        break;
      case '4':
        console.log('👋 ¡Hasta luego!');
        rl.close();
        break;
      default:
        console.log('⚠️ Opción inválida. Intenta de nuevo.');
        mostrarMenu();
    }
  });
}

// Inicia el programa
mostrarMenu();

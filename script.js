// script.js

const destinos = [];

// Registrar un destino
const registrarDestino = (destino, fecha, transporte) => {
  const costo = calcularCosto(destino, transporte);
  destinos.push({ destino, fecha, transporte, costo });
};

// Calcular el costo
const calcularCosto = (destino, transporte) => {
  const preciosDestino = { Paris: 500, Londres: 400, 'New York': 600 };
  const preciosTransporte = { Avión: 200, Tren: 100 };
  const baseDestino = preciosDestino[destino] ?? 0;
  const baseTransporte = preciosTransporte[transporte] ?? 0;
  return baseDestino + baseTransporte;
};

// Mostrar el itinerario
const mostrarItinerario = () => {
  console.log('🧳 Itinerario de viajes:');
  destinos.forEach(({ destino, fecha, transporte, costo }) => {
    console.log(`Destino: ${destino}`);
    console.log(`Fecha:   ${fecha}`);
    console.log(`Transporte: ${transporte}`);
    console.log(`Costo:   $${costo}`);
    console.log('---------------------------');
  });
};

// Lógica principal
const iniciarApp = () => {
  registrarDestino('Paris', '2024-06-15', 'Avión');
  registrarDestino('Londres', '2024-07-01', 'Tren');
  mostrarItinerario();
};

// Ejecutar solo si se llama directamente
if (require.main === module) {
  iniciarApp();
}

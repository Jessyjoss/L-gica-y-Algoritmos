// Lista de productos
const productos = [
  { nombre: "Abrigo de terciopelo", precio: 799, categoria: "Ropa y calzado👗👞" },
  { nombre: "Cafetera", precio: 3200, categoria: "Electrónica 🎮" },
  { nombre: "Colores", precio: 80, categoria: "Educación 📚" },
  { nombre: "Perfume", precio: 950, categoria: "Belleza 💄" },
  { nombre: "Labial", precio: 200, categoria: "Belleza 💄" }
];

// Elementos del DOM
const inputPrecioMax = document.getElementById("precio-max");
const btnFiltrar = document.getElementById("btn-filtrar");
const listaProductos = document.getElementById("lista-productos");
const totalText = document.getElementById("total");
const todosRopaText = document.getElementById("todos-ropa");
const hayCarosText = document.getElementById("hay-caros");
const incluyePerfumeText = document.getElementById("incluye-Perfume");

// Evento del botón "Filtrar"
btnFiltrar.addEventListener("click", () => {
  const precioMax = parseFloat(inputPrecioMax.value) || 1000;

  // 1. Filtrar por precio
  const filtrados = productos.filter(p => p.precio < precioMax);
  console.log("📦 Productos filtrados (< $" + precioMax + "):", filtrados);

  // 2. Ordenar alfabéticamente
  const ordenados = filtrados.slice().sort((a, b) => a.nombre.localeCompare(b.nombre));
  console.log("🔤 Productos ordenados alfabéticamente:", ordenados);

  // 3. Crear lista visual en el HTML
  listaProductos.innerHTML = ""; // Limpiar lista anterior

  ordenados.forEach(producto => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <strong>${producto.nombre}</strong><br>
        Precio: $${producto.precio} <br>
        Categoría: ${producto.categoria}
      </div>
      <button onclick="alert('Producto: ${producto.nombre}\\nPrecio: $${producto.precio}\\nCategoría: ${producto.categoria}')">
        Ver detalle
      </button>
    `;
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.marginBottom = "10px";
    li.style.padding = "10px";
    li.style.border = "1px solid #ccc";
    li.style.borderRadius = "8px";
    listaProductos.appendChild(li);
  });

  // 4. Estadísticas
  const nombres = ordenados.map(p => p.nombre);
  const total = ordenados.reduce((sum, p) => sum + p.precio, 0);
  const todosRopa = ordenados.every(p => p.categoria === "Ropa y calzado👗👞");
  const hayCaros = productos.some(p => p.precio > 700);
  const incluyePerfume = nombres.includes("Perfume");

  // 5. Mostrar resumen en pantalla
  totalText.textContent = `💸 Total gastado en productos filtrados: $${total}`;
  todosRopaText.textContent = `👗 ¿Todos los productos son de "Ropa y calzado"? ${todosRopa ? "Sí" : "No"}`;
  hayCarosText.textContent = `🤑 ¿Hay productos con precio mayor a $700? ${hayCaros ? "Sí" : "No"}`;
  incluyePerfumeText.textContent = `🌼 ¿La lista incluye "Perfume"? ${incluyePerfume ? "Sí" : "No"}`;

  // 6. Mostrar resumen en consola
  console.log("🧾 Nombres de productos filtrados:", nombres);
  console.log("💸 Total gastado en productos filtrados: $" + total);
  console.log("👗 ¿Todos son de ropa?:", todosRopa);
  console.log("🤑 ¿Hay productos caros (> $700)?:", hayCaros);
  console.log("🌼 ¿Incluye 'Perfume'?:", incluyePerfume);
});

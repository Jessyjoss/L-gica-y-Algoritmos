// index.js

const listaDeCompras = [];
const input = document.getElementById('producto-input');
const btnAgregar = document.getElementById('btn-agregar');
const listaUL = document.getElementById('lista');

const renderLista = () => {
  listaUL.innerHTML = '';
  listaDeCompras.forEach(producto => {
    const li = document.createElement('li');
    li.textContent = producto;
    const btn = document.createElement('button');
    btn.textContent = 'X';
    btn.className = 'remove';
    btn.onclick = () => eliminarProducto(producto);
    li.appendChild(btn);
    listaUL.appendChild(li);
  });
};

const agregarProducto = producto => {
  const trimmed = producto.trim();
  if (!trimmed) return;
  if (!listaDeCompras.includes(trimmed)) {
    listaDeCompras.push(trimmed);
    console.log(`✅ "${trimmed}" agregado.`);
  } else {
    console.log(`❌ "${trimmed}" ya existe.`);
  }
  renderLista();
};

const eliminarProducto = producto => {
  const index = listaDeCompras.indexOf(producto);
  if (index !== -1) {
    listaDeCompras.splice(index, 1);
    console.log(`🗑️ "${producto}" eliminado.`);
    renderLista();
  }
};

btnAgregar.addEventListener('click', () => {
  agregarProducto(input.value);
  input.value = '';
  input.focus();
});

input.addEventListener('keypress', e => {
  if (e.key === 'Enter') btnAgregar.click();
});

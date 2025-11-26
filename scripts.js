// Función para agregar productos al carrito
function agregarCarrito(producto) {
  alert(producto + " se ha añadido al carrito.");
}

// Para el formulario de contacto
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Formulario enviado correctamente.");
});
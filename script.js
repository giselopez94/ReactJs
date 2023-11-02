
const estadoElemento = document.getElementById("estado");
const estadoSeleccionadoElemento = document.getElementById("estadoSeleccionado");

estadoElemento.addEventListener("change", function () {
  const estadoSeleccionado = estadoElemento.value;
  estadoSeleccionadoElemento.textContent = estadoSeleccionado;
});

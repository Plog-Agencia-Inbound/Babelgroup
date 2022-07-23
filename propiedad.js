// Boton de Ver más
const ver_mas = document.getElementById("ver_mas");
const descripciom_propiedad = document.getElementById("descripcion");

ver_mas.addEventListener("click", function () {
  descripciom_propiedad.classList.remove("text_corto");
  ver_mas.style.display = "none";
});


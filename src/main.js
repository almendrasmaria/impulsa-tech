import './style.css'


/*
window.closeWindow = function () {
  document.querySelector(".ventana").style.display = "none";
};*/

const ventana = document.querySelector(".ventana");
const botones = document.querySelectorAll(".button, .cerrar"); // incluye botones y SVG

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    if (
      boton.classList.contains("cerrar") ||
      boton.textContent.includes("Aceptar") ||
      boton.textContent.includes("Rechazar")
    ) {
      ventana.style.display = "none"; 
    } else if (boton.textContent.includes("Personalizar")) {
      ventana.style.display = "grid"; 
    }
  });
});
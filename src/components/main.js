// Se asegura de que el código se ejecute una vez que el HTML esté cargado.
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona el botón de hamburguesa (el que tiene la clase .menu-toggle)
  const toggleButton = document.querySelector(".menu-toggle");
  // Selecciona el menú de navegación (el que tiene la clase .nav-menu)
  const navMenu = document.querySelector(".nav-menu");

  // Escucha el evento de clic en el botón
  toggleButton.addEventListener("click", function () {
    // Añade o quita la clase 'activo' del menú.
    // Esta clase es la que el CSS utiliza para mostrar/ocultar el menú.
    navMenu.classList.toggle("activo");

    // Gestión de accesibilidad: actualiza el atributo aria-expanded
    const isExpanded =
      toggleButton.getAttribute("aria-expanded") === "true" || false;
    toggleButton.setAttribute("aria-expanded", !isExpanded);
  });
});


import function toggleButton(){

  
}
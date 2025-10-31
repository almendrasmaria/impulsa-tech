document.addEventListener('DOMContentLoaded', () => {
    const pestanaBtns = document.querySelectorAll('.pestaña-btn');
    const indicador = document.querySelector('.pestaña-indicador');
    const contenidoPestanas = document.querySelectorAll('.contenido-pestaña');

    /**
     * Función para actualizar la posición y ancho de la barra indicadora
     * @param {HTMLElement} botonActivo - El botón de pestaña actualmente activo.
     */
    function actualizarIndicador(botonActivo) {
        if (!botonActivo) return;

        const contenedor = botonActivo.closest('.pestañas-contenedor');
        // Obtener la posición y ancho del botón activo
        const { offsetWidth: ancho, offsetLeft: posicionX } = botonActivo;
        
        // Aplicar el ancho y la traducción al indicador con CSS
        indicador.style.width = `${ancho}px`;
        indicador.style.transform = `translateX(${posicionX}px)`;
    }

    /**
     * Función para cambiar entre pestañas
     * @param {string} idDeseado - El ID de la pestaña de contenido que se desea mostrar.
     * @param {HTMLElement} botonClickeado - El botón que fue clickeado.
     */
    function cambiarPestana(idDeseado, botonClickeado) {
        // 1. Ocultar todos los contenidos y desactivar todos los botones
        contenidoPestanas.forEach(content => {
            content.classList.remove('visible');
        });
        pestanaBtns.forEach(btn => {
            btn.classList.remove('activa');
        });

        // 2. Mostrar el contenido deseado y activar el botón
        const contenidoDeseado = document.getElementById(idDeseado);
        if (contenidoDeseado) {
            contenidoDeseado.classList.add('visible');
        }
        botonClickeado.classList.add('activa');

        // 3. Mover la barra indicadora
        actualizarIndicador(botonClickeado);
    }


    // --- Asignar Eventos a los Botones de Pestaña ---
    pestanaBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-pestaña');
            cambiarPestana(id, btn);
        });
    });

    // --- Inicialización (Configurar la pestaña por defecto) ---
    // Encontrar el botón activo por defecto (el que tiene la clase 'activa' en el HTML)
    const botonActivoInicial = document.querySelector('.pestaña-btn.activa');
    if (botonActivoInicial) {
        // Ejecutar la actualización del indicador al cargar la página
        actualizarIndicador(botonActivoInicial);
    }
    
    // Opcional: Reajustar el indicador si se cambia el tamaño de la ventana
    window.addEventListener('resize', () => {
        const botonActivo = document.querySelector('.pestaña-btn.activa');
        actualizarIndicador(botonActivo);
    });
    
    // --- Lógica del Formulario (Ejemplo simple) ---
    const guardarBtn = document.querySelector('.guardar-btn');
    guardarBtn.addEventListener('click', (e) => {
        // Aquí iría la lógica de validación y envío de datos
        // Por ejemplo, puedes prevenir el envío por defecto si fuera un <form>
        // e.preventDefault(); 
        
        console.log('Botón "Guardar cambios" presionado. Se puede añadir aquí la lógica de validación y AJAX.');
        alert('Datos de perfil simuladamente guardados.');
    });

    // Se pueden añadir validaciones de límite de caracteres en tiempo real si es necesario, 
    // pero el atributo 'maxlength' en el HTML ya maneja la restricción de entrada.
});
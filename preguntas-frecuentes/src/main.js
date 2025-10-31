document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los encabezados del acordeón
    const headers = document.querySelectorAll('.acordeon-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            // El elemento padre es el .acordeon-item
            const item = this.parentElement;
            // El contenido a desplegar es el siguiente hermano
            const content = this.nextElementSibling;

            // 1. Alterna la clase 'active' en el item
            item.classList.toggle('active');

            // 2. Controla la altura para la animación de despliegue
            if (item.classList.contains('active')) {
                // Si se abre, ajusta el max-height a la altura real del contenido para la animación
                // Se usa scrollHeight para obtener la altura completa del contenido oculto
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                // Si se cierra, vuelve el max-height a 0
                content.style.maxHeight = "0";
            }

            // Opcional: Para que solo se mantenga uno abierto a la vez (comentar si quieres que se puedan abrir varios)
            // Cierra los otros items si están abiertos
            document.querySelectorAll('.acordeon-item').forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.acordeon-content').style.maxHeight = "0";
                }
            });
        });
    });
    
    // Ajuste inicial para el item "activo" (el primero) al cargar la página
    const activeItem = document.querySelector('.acordeon-item.active .acordeon-content');
    if(activeItem) {
        // Asegura que la altura inicial se establezca para que el primero se vea abierto
        activeItem.style.maxHeight = activeItem.scrollHeight + "px";
    }
});
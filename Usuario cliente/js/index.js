document.addEventListener("DOMContentLoaded", function() {
    // Obtener todas las imágenes a las que deseas aplicar el efecto
    var images = document.querySelectorAll(".card-img-top");

    // Iterar sobre cada imagen
    images.forEach(function(image) {
        // Agregar event listener para el mouseenter
        image.addEventListener("mouseenter", function() {
            // Agregar la clase img-hover-zoom para aplicar el efecto de zoom al pasar el mouse
            this.classList.add("img-hover-zoom");
        });

        // Agregar event listener para el mouseleave
        image.addEventListener("mouseleave", function() {
            // Quitar la clase img-hover-zoom para eliminar el efecto de zoom al quitar el mouse
            this.classList.remove("img-transition");
        });
    });
});

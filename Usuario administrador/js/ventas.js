document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los grupos de botones
    var buttonGroups = document.querySelectorAll(".btn-group");

    // Iterar sobre cada grupo de botones
    buttonGroups.forEach(function(group) {
        // Obtener todos los botones dentro del grupo
        var buttons = group.querySelectorAll(".btn");

        // Agregar un event listener para el evento click a cada botón
        buttons.forEach(function(button) {
            button.addEventListener("click", function() {
                // Verificar cuál es el botón activo actual
                var activeButton = group.querySelector(".btn.active");

                // Remover la clase 'active' del botón activo actual
                if (activeButton) {
                    activeButton.classList.remove("active");
                }

                // Agregar la clase 'active' al botón clickeado
                button.classList.add("active");

                // Cambiar el color de los otros botones en el grupo
                buttons.forEach(function(btn) {
                    if (btn !== button) {
                        btn.classList.add("other-color");
                    } else {
                        btn.classList.remove("other-color");
                    }
                });
            });
        });
    });
});

$(document).ready(function () {
    // Método de validación personalizado para solo números
    $.validator.addMethod("soloNumeros", function (value, element) {
        return this.optional(element) || /^[0-9]+$/.test(value);
    }, "Por favor, ingresa solo números.");

    $('#formulario-bodega').validate({
        rules: {
            categoria: {
                required: true,
            },
            nombre: {
                required: true,
            },
            cantidad:{
                required: true,
                number: true,
                min: 1
             
            }
        },

        messages: {
            categoria: {
                required: "Por favor, selecciona una categoría."
            },
            nombre: {
                required: "Por favor, selecciona un nombre."
            },
            cantidad: {
                required: "Por favor, ingresa una cantidad.",
                soloNumeros: "Por favor, ingresa solo números."
            }
        }

    });
});
$(document).ready(function () {

    // Método de validación para correo
    $.validator.addMethod("emailCompleto", function (value, element) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;
        return regex.test(value);
    }, 'El formato del correo no es válido');

   // Método de validación para contraseña fuerte
   $.validator.addMethod("strongPassword", function(value, element) {
    return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value);
}, "La contraseña debe contener al menos un número, una mayúscula y una minúscula.");

    // Validar formulario con jquery
    $("#formulario-ingreso").validate({
        rules: {
            correo: {
                required: true,
                email: true, // Esta regla verifica si es un correo electrónico válido
                emailCompleto: true // Aquí aplicamos tu método personalizado para verificar el formato del correo
            },
            password: {
                required: true,
                minlength: 5,
                maxlength: 15,
                strongPassword: true,
            },
        },
        messages: {
            correo: {
                required: "El correo es requerido",
                email: "El correo debe ser válido", // Este mensaje se muestra si el formato del correo es inválido según la regla `email`
                emailCompleto: "El correo debe ser válido" // Este mensaje se muestra si el correo no pasa la validación personalizada
            },
            password: {
                required: "La contraseña es requerida",
                strongPassword: "La contraseña debe contener al menos un número, una mayúscula y una minúscula.",
                minlength: "La contraseña debe tener mínimo 5 caracteres",
                maxlength:  "La contraseña debe tener máximo 15 caracteres"
            }
        },
    });
});

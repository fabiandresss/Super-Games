// Validador de formulario de registro
$(document).ready(function () {

    // Método de validación para RUT chileno
    $.validator.addMethod("rutChileno", function (value, element) {
        value = value.replace(/\./g, ""); // Remover puntos
        var rutPattern = /^\d{7,8}-[\dK]$/; // Expresión regular para validar RUT
        return rutPattern.test(value) && $.validator.methods.validarRut.call(this, value, element);
    }, "El RUT no es válido (escriba sin puntos y con guión)");

    // Método de validación para correo
    $.validator.addMethod("emailCompleto", function (value, element) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;
        return regex.test(value);
    }, 'El formato del correo no es válido');

    // Método de validación para que un campo sólo acepte letras y espacios en blanco
    $.validator.addMethod("soloLetras", function (value, element) {
        return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);
    }, "Sólo se permiten letras y espacios en blanco.");

    // Método de validación para contraseña fuerte
    $.validator.addMethod("strongPassword", function(value, element) {
        return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value);
    }, "La contraseña debe contener al menos un número, una mayúscula y una minúscula.");

    $.validator.addMethod("validarRut", function(value, element) {
        value = value.replace(/\./g, "").replace(/-/g, ""); // Remover puntos y guiones
        var rut = value.slice(0, -1);
        var dv = value.slice(-1).toUpperCase(); // Convertir dígito verificador a mayúscula
        var factor = 2;
        var sum = 0;
    
        // Calcular suma ponderada de los dígitos del RUT
        for (var i = rut.length - 1; i >= 0; i--) {
            sum += parseInt(rut.charAt(i)) * factor;
            factor = factor === 7 ? 2 : factor + 1;
        }
    
        // Calcular dígito verificador esperado
        var dvCalculado = 11 - (sum % 11);
        dvCalculado = dvCalculado === 11 ? "0" : dvCalculado === 10 ? "K" : dvCalculado.toString();
    
        // Verificar que el dígito verificador coincida
        return dv === dvCalculado;
    }, "El RUT no es válido (escriba sin puntos y con guión)");
    

    // El siguiente Javascript obliga a que la caja de texto del RUT siempre escriba la letra "K" en mayúscula
    document.getElementById('rut').addEventListener('keyup', function (e) {
        e.target.value = e.target.value.toUpperCase();
    });

    // Validar formulario con JQuery
    $("#formulario-mis-datos").validate({
        rules: {
            rut: {
                required: true,
                rutChileno: true,
                validarRut: true,
            },
            nombre: {
                required: true,
                soloLetras: true
            },
            apellido: {
                required: true,
                soloLetras: true
            },
            correo: {
                required: true,
                emailCompleto: true,
            },
            direccion: {
                required: true,
                minlength: 10,
            },
            password: {
                required: true,
                minlength: 5,
                maxlength: 15,
                strongPassword: true,
            },
            password2: {
                required: true,
                minlength: 5,
                maxlength: 15,
                equalTo: "#password",
            },
        },
        messages: {
            rut: {
                required: "El RUT es un campo requerido",
                rutChileno: "El RUT no es válido (escriba sin puntos y con guión)",
                validarRut: "El RUT no es válido (escriba sin puntos y con guión)"
            },
            nombre: {
                required: "El nombre es un campo requerido",
                soloLetras: "El nombre sólo puede contener letras y espacios en blanco",
            },
            apellido: {
                required: "El apellido es un campo requerido",
                soloLetras: "El apellido sólo puede contener letras y espacios en blanco"
            },
            correo: {
                required: "El correo es un campo requerido",
                email: "El formato del correo no es válido",
            },
            direccion: {
                required: "La dirección es un campo requerido",
                minlength: "La dirección debe tener mínimo 10 caracteres",
            },
            password: {
                required: "La contraseña es un campo requerido",
                minlength: "La contraseña debe tener un mínimo de 5 caracteres",
                maxlength: "La contraseña debe tener un máximo de 15 caracteres",
            },
            password2: {
                required: "Repetir contraseña es un campo requerido",
                minlength: "Repetir contraseña debe tener un mínimo de 5 caracteres",
                maxlength: "Repetir contraseña debe tener un máximo de 15 caracteres",
                equalTo: "Debe repetir la contraseña escrita anteriormente",
            },
        },
    });

});

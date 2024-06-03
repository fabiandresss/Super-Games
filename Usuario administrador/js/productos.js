$(document).ready(function () {

  // Método de validación
  $.validator.addMethod("labelId", function (value, element) {
    return this.optional(element) || /^[a-zA-Z]{4}[0-9]{4}$/.test(value);
  }, );

  // Método de validación para solo números y puntos
  $.validator.addMethod("numYpuntos", function (value, element) {
    return this.optional(element) || /^[0-9.]+$/.test(value);
  }, "Por favor, ingresa solo números y puntos.");

  // Método de validación para solo números y signos %
  $.validator.addMethod("numYporcentaje", function (value, element) {
    return this.optional(element) || /^[0-9%]+$/.test(value);
  }, "Por favor, ingresa solo números y signos %.");

  // Método de validación personalizado para asegurar que haya un signo %
  $.validator.addMethod("contienePorcentaje", function (value, element) {
    return this.optional(element) || /%/.test(value);
  }, "El campo debe contener al menos un signo %.");

  $('#formulario-mantenedor-productos').validate({
    rules: {
      labelId: {
        required: true,
      },
      categoria: {
        required: true
      },
      nombre: {
        required: true,
        minlength: 3,
      },
      descripcion: {
        required: true,
        minlength: 15,
        maxlength: 200
      },
      precio: {
        required: true,
        number: true,
        min: 0,
      },
      suscripcion: {
        required: true,
        number: true,
        min: 0,
        max: 100,
      },
      oferta: {
        required: true,
        number: true,
        min: 0,
        max: 100
      }
    },
    messages: {
      labelId: {
        required: "Por favor, ingresa un ID para el producto.",
      },
      categoria: {
        required: "Por favor, selecciona una categoría."
      },
      nombre: {
        required: "Campo nombre es obligatorío",
        minlength: "Debe tener minimo 3 caracteres"
      },
      descripcion: {
        required: "Por favor, ingrese una descripción para el producto",
        minlength: "Debe tener mínimo 15 caracteres",
        maxlength: "Debe tener máximo 200 caracteres"
      },
      precio: {
        required: "Por favor, ingrese un precio para el producto",
        numYpuntos: "El precio debe ser un número con puntos",
      },
      suscripcion: {
        required: "Por favor, ingrese un porcentaje de descuento para la suscripción",
        numYporcentaje: "El porcentaje debe ser un número con signo %",
        contienePorcentaje: "El porcentaje debe contener el signo %"
      },
      oferta: {
        required: "Por favor, ingrese un porcentaje de descuento para la oferta",
        numYporcentaje: "El porcentaje debe ser un número con signo %",
        contienePorcentaje: "El porcentaje debe contener el signo %"
      }
    }


  });
});
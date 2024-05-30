$(document).ready(function () {

  // Método de validación
  $.validator.addMethod("labelId", function (value, element) {
    return this.optional(element) || /^[a-zA-Z]{4}[0-9]{4}$/.test(value);
  }, "El ID debe contener exactamente 4 letras seguidas de 4 números.");

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
        labelId: true
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
        maxlenght: 100
      },
      precio: {
        required: true,
        numYpuntos: true
      },
      suscripcion: {
        required: true,
        numYporcentaje: true,
        contienePorcentaje: true
      },
      oferta: {
        required: true,
        numYporcentaje: true,
        contienePorcentaje: true
      }
    },
    messages: {
      labelId: {
        required: "Por favor, ingresa un ID para el producto.",
        labelId: "El ID debe contener 4 letras seguido de 4 números"
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
        minlength: "Debe tener minimo 15 caracteres",
        maxlenght: "Debe tener minimo 100 caracteres"
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
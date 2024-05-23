document.addEventListener('DOMContentLoaded', function() {
    var inputFile = document.getElementById('imagen-producto');
    if (inputFile) {
      var label = inputFile.labels[0];
      if (label) {
        label.textContent = 'Examinar';
      }
    }
  });
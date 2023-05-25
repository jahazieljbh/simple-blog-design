// Función para copiar el contenido al portapapeles
function copyToClipboard(text) {
  var textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

// Obtener todos los botones de copia por su clase
var copyButtons = document.querySelectorAll('.copyButton');

// Asignar el evento de clic a cada botón
copyButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Obtener el elemento de código correspondiente al botón
    var codeElement = button.parentNode.parentNode.previousElementSibling.querySelector('code');

    // Obtener el texto del código
    var codeText = codeElement.innerText;

    // Copiar el texto al portapapeles
    copyToClipboard(codeText);

    // Cambiar el texto del botón a "Copied!"
    button.textContent = 'Copied!';

    // Restaurar el texto del botón después de 3 segundos
    setTimeout(function() {
      button.textContent = 'Copy';
    }, 3000);
  });
});

// Obtener el elemento del año actual
const currentYearElement = document.getElementById('current-year');

// Obtener el año actual
const currentYear = new Date().getFullYear();

// Actualizar el contenido del elemento con el año actual
currentYearElement.textContent = currentYear;

document.getElementById("backButton").addEventListener("click", goBack);

function goBack() {
  // Agrega aquí tu lógica de retroceso
  // Puede ser una redirección a una página anterior o una acción personalizada
  window.history.back();
}

// Obtenemos los elementos de categoría
const categoryLinks = document.querySelectorAll('.category');
  
// Agregamos un evento de clic a cada categoría
categoryLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Obtenemos el filtro asociado a la categoría
    const filter = link.dataset.filter;
    
    // Obtenemos todos los elementos del contenido principal
    const mainContentItems = document.querySelectorAll('#home > main');
    
    // Mostramos u ocultamos los elementos según el filtro
    mainContentItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block'; // Mostramos el elemento
      } else {
        item.style.display = 'none'; // Ocultamos el elemento
      }
    });
  });
});
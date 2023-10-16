var buttonVisible = false;
function mostrarCombobox(radio) {
  var cboxContainer;
  var inputContainer;
  var buttonStep1;

  if (radio === 'regular') {
    cboxContainer = document.getElementById("comboboxContainerRegular");
    inputContainer = document.getElementById("inputContainerRegular");
    buttonStep1 = document.getElementById("btnContainerStep1Regular");
  } else if (radio === 'female') {
    cboxContainer = document.getElementById("comboboxContainerFemale");
    inputContainer = document.getElementById("inputContainerFemale");
    buttonStep1 = document.getElementById("btnContainerStep1Female");
  } else if (radio === 'other') {
    cboxContainer = document.getElementById("comboboxContainerOther");
    inputContainer = document.getElementById("inputContainerOther");
    buttonStep1 = document.getElementById("btnContainerStep1Other");
  }

  if (cboxContainer.style.display === "none") {
    cboxContainer.style.display = "block";
  } else {
    cboxContainer.style.display = "none";
    inputContainer.style.display = "none";
    inputContainer.value = "";
    buttonStep1.style.display = "none";
  }
}

function mostrarInput(radio) {
  var combobox;
  var inputContainer;
  var buttonStep1;

  if (radio === 'regular') {
    combobox = document.getElementById("comboboxRegular");
    inputContainer = document.getElementById("inputContainerRegular");
    buttonStep1 = document.getElementById("btnContainerStep1Regular");
  } else if (radio === 'female') {
    combobox = document.getElementById("comboboxFemale");
    inputContainer = document.getElementById("inputContainerFemale");
    buttonStep1 = document.getElementById("btnContainerStep1Female");
  } else if (radio === 'other') {
    combobox = document.getElementById("comboboxOther");
    inputContainer = document.getElementById("inputContainerOther");
    buttonStep1 = document.getElementById("btnContainerStep1Other");
  }

  if (combobox.value !== "") {
    inputContainer.style.display = "block";
    buttonStep1.style.display = "block";
  } else {
    inputContainer.style.display = "none";
    inputContainer.value = "";
    buttonStep1.style.display = "none";
  }
}




var contadorItems = 1;

function agregarItem() {
  var contenedorPrincipal = document.getElementById('contenedorPrincipal');
  var ultimoItem = contenedorPrincipal.lastElementChild;

  // Clonar el contenido del div "contenedorPrincipal"
  var clone = ultimoItem.cloneNode(true);

  // Incrementar el contador de items
  contadorItems++;

  // Actualizar el número del item en el clon
  var itemNumber = clone.querySelector('#itemNumber');
  itemNumber.textContent = 'Item ' + contadorItems;

  // Limpiar los valores de los inputs clonados
  var hiddenInputs = clone.querySelectorAll('.hidden-input');
  hiddenInputs.forEach(function(input) {
    input.value = '';
  });

  // Crear un contenedor para el nuevo item
  var nuevoContenedor = document.createElement('div');
  nuevoContenedor.classList.add('columnM');
  nuevoContenedor.appendChild(clone);

  // Agregar el nuevo contenedor debajo del contenedor principal
  contenedorPrincipal.parentNode.insertBefore(nuevoContenedor, contenedorPrincipal.nextSibling);

  // Actualizar los números de item existentes
  var numerosItems = contenedorPrincipal.parentNode.querySelectorAll('.box-id p');
  numerosItems.forEach(function(numeroItem, index) {
    numeroItem.textContent = 'Item ' + (index + 1);
  });
}


function eliminarItem() {
  var contenedorPrincipal = document.getElementById('contenedorPrincipal');
  var items = contenedorPrincipal.parentNode.getElementsByClassName('columnM');

  // Verificar si hay más de un item para eliminar
  if (items.length > 1) {
    var ultimoItem = items[items.length - 1];

    // Eliminar el último item
    ultimoItem.parentNode.removeChild(ultimoItem);
  }
}

// Cambiar el evento de clic a mousedown
document.getElementById('btnOcultarInputs').addEventListener('mousedown', eliminarItem);


function login() {
  // Obtener los valores de los campos de inicio de sesión
  var username = document.getElementById("usuario").value;
  var password = document.getElementById("password").value;

  // Comprobar si el usuario y la contraseña son válidos
  if (username === "Socimo Luis" && password === "12345") {
      // Redireccionar al panel de administración si el usuario es "admin"
      window.location.href = "admin.html";
  } else {
      // Redireccionar a la página de cliente para otros usuarios
      window.location.href = "Formulario.html";
  }
}
document.addEventListener('DOMContentLoaded', function () {


    const canvas = document.getElementById('captchaCanvas');
    const context = canvas.getContext('2d');
    const captchaInput = document.getElementById('captchaInput');
    const verifyButton = document.getElementById('verifyButton');

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateCaptcha() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captcha = '';

        for (let i = 0; i < 6; i++) {
            const randomIndex = getRandomNumber(0, chars.length - 1);
            captcha += chars.charAt(randomIndex);
        }

        return captcha;
    }

    function drawCaptcha() {
        const captchaText = generateCaptcha();
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = '48px Arial';
        context.fillText(captchaText, 50, 100);

        captchaInput.dataset.captcha = captchaText;
    }

    drawCaptcha();

    verifyButton.addEventListener('click', (event) => {
        event.preventDefault(); 

        const userCaptcha = captchaInput.value;
        const generatedCaptcha = captchaInput.dataset.captcha;

        if (userCaptcha === generatedCaptcha) {
            alert('CAPTCHA correcto. Puede proceder.');
        } else {
            alert('CAPTCHA incorrecto. Inténtalo de nuevo.');
            drawCaptcha();
            captchaInput.value = '';
        }
    });

    /*Validación de Datos*/
    /*Nombre*/
    const nombreInput = document.getElementById("username");
    const mensajeError = document.getElementById("mensaje-error");

    nombreInput.addEventListener('input', validarNombreEnTiempoReal);

    function validarNombreEnTiempoReal() {
        const nombre = nombreInput.value.trim().toLowerCase(); 
        const regexNombre = /^(?!.*(\w)\1{3})[A-Za-zÁáÉéÍíÓóÚú\s'-]{3,25}(?:\s[A-Za-zÁáÉéÍíÓóÚú'-]{3,25}){0,3}$/;

        if (nombre === "") {
            mensajeError.textContent = ""; 
        } else if (!regexNombre.test(nombre)) {
            mensajeError.textContent = "Caracteres inválidos en el nombre.";
        } else {
            mensajeError.textContent = "";
        }
    }

    /*Apellido*/

    const apellidoInput = document.getElementById("apellido");
    const mensajeErrorApellido = document.getElementById("mensaje-error-apellido");

    apellidoInput.addEventListener('input', validarApellidoEnTiempoReal);

    function validarApellidoEnTiempoReal() {
        const apellido = apellidoInput.value.trim().toLowerCase();
        const regexApellido = /^(?!.*(\w)\1{3})[A-Za-zÁáÉéÍíÓóÚú][A-Za-zÁáÉéÍíÓóÚú\s'-]{2,30}[A-Za-zÁáÉéÍíÓóÚú](?:\s[A-Za-zÁáÉéÍíÓóÚú'-]{2,30}){0,3}$/gm;

        if (apellido === "") {
            mensajeErrorApellido.textContent = ""; 
        } else if (!regexApellido.test(apellido)) {
            mensajeErrorApellido.textContent = "Caracteres inválidos en el apellido.";
        } else {
            mensajeErrorApellido.textContent = "";
        }
    }

    /*Correo*/
    const mensajeErrorCorreo = document.getElementById("mensaje-error-correo");
    const correoInput = document.getElementById("email");

    correoInput.addEventListener('input', validarCorreoEnTiempoReal);

    function validarCorreoEnTiempoReal() {
        const correo = correoInput.value;

        const regexCorreo = /^[a-zA-Z0-9._-]{4,20}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;


        if (correo === "") {
            mensajeErrorCorreo.textContent = ""; 
        } else if (!regexCorreo.test(correo)) {
            mensajeErrorCorreo.textContent = "Verifique la dirección de correo electrónico.";
        } else {
            mensajeErrorCorreo.textContent = ""; 
        }
    }

        
    function validarContraseña() {
        const password = passwordInput.value;
        const confirm_password = confirmPasswordInput.value;

        return password === confirm_password;
    }

    const form = document.querySelector(".form");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm_password");
    const mensajeErrorConfirmPassword = document.getElementById("mensaje-error-confirm-password");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        const passwordsMatch = validarContraseña();

        if (!passwordsMatch) {
            mensajeErrorConfirmPassword.style.display = "block";
        } else {
            mensajeErrorConfirmPassword.style.display = "none";
        }
    });

    /*Contraseña*/
    const mensajeErrorPassword = document.getElementById("mensaje-error-password");

    passwordInput.addEventListener('input', validarContraseñaEnTiempoReal);

    function validarContraseñaEnTiempoReal() {
        const contraseña = passwordInput.value;

        const regexContraseña = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,8}$/;

        if (contraseña === "") {
            mensajeErrorPassword.textContent = ""; 
        } else if (!regexContraseña.test(contraseña)) {
            mensajeErrorPassword.textContent = "Contraseña inválida. Verifique los requisitos por favor.";
        } else {
            mensajeErrorPassword.textContent = ""; 
        }
    }

    /*toggle password*/

    const togglePassword = document.getElementById("togglePassword");
    const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

    function toggleVisibility(input, toggle) {
        if (input.type === "password") {
            input.type = "text";
            toggle.textContent = "visibility";
        } else {
            input.type = "password";
            toggle.textContent = "visibility_off";
        }
    }
    togglePassword.addEventListener("click", function () {
        toggleVisibility(passwordInput, togglePassword);
    });

    toggleConfirmPassword.addEventListener("click", function () {
        toggleVisibility(confirmPasswordInput, toggleConfirmPassword);
    });


    // MODAL

    

    //validar formulario

    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById("registrationForm");
    
        form.addEventListener("submit", function (event) {
            event.preventDefault();
    
            // Validar el formulario aquí
            const nombre = document.getElementById("username").value.trim();
            const apellido = document.getElementById("apellido").value.trim();
            const correo = document.getElementById("email").value.trim();
            const contraseña = document.getElementById("password").value;
            const confirmarContraseña = document.getElementById("confirm_password").value;
            const captcha = document.getElementById("captchaInput").value;
            const checkbox1 = document.getElementById("checkbox1").checked;
            const checkbox2 = document.getElementById("checkbox2").checked;
    
            // Validar los campos y mostrar mensajes de error si es necesario
            // ...
    
            // Si todo está validado correctamente, puedes enviar el formulario
            if (nombre !== "" && apellido !== "" && correo !== "" && contraseña !== "" && confirmarContraseña !== "" && captcha !== "" && checkbox1 && checkbox2) {
                
                form.submit();
            } else {
                // Mostrar un mensaje de error si algún campo no está válido
                alert("Por favor, complete todos los campos correctamente.");
            }
        });
    });

});





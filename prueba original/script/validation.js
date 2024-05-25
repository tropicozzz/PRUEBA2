function enviarFormulario2() {
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;

    var errorEmail = document.getElementById("error-email");
    var errorContraseña = document.getElementById("error-contraseña");
    var errorNombre = document.getElementById("error-nombre");
    var errorApellido = document.getElementById("error-apellido");
    var errorTelefono = document.getElementById("error-telefono");

    var mensajesError = [];

    // Limpiar mensajes de error anteriores
    errorEmail.textContent = "";
    errorContraseña.textContent = "";
    errorNombre.textContent = "";
    errorApellido.textContent = "";
    errorTelefono.textContent = "";

    // Validaciones
    if (email === null || email === "") {
        mensajesError.push("Ingrese su correo electrónico");
        errorEmail.textContent = "Ingrese su correo electrónico";
    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mensajesError.push("Correo electrónico no válido");
            errorEmail.textContent = "Correo electrónico no válido";
        }
    }

    if (contraseña === null || contraseña === "") {
        mensajesError.push("Ingrese su contraseña");
        errorContraseña.textContent = "Ingrese su contraseña";
    }

    if (nombre === null || nombre === "") {
        mensajesError.push("Ingrese su nombre");
        errorNombre.textContent = "Ingrese su nombre";
    }

    if (apellido === null || apellido === "") {
        mensajesError.push("Ingrese su apellido");
        errorApellido.textContent = "Ingrese su apellido";
    }

    if (telefono === null || telefono === "") {
        mensajesError.push("Ingrese su teléfono");
        errorTelefono.textContent = "Ingrese su teléfono";
    } else {
        var telefonoRegex = /^\d{10}$/;
        if (!telefonoRegex.test(telefono)) {
            mensajesError.push("Número de teléfono no válido");
            errorTelefono.textContent = "Número de teléfono no válido";
        }
    }

    // Evitar que el formulario se envíe si hay errores
    if (mensajesError.length > 0) {
        return false;
    } else {
        // Redirigir al index si el formulario está validado correctamente
        window.location.href = 'index.html';
    }
}

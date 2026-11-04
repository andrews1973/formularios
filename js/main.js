
const formulario = document.querySelector("#formulario1");
const mensajes = document.querySelector("#mensajes");

formulario.addEventListener("submit", (ev) => {

    ev.preventDefault();

    mensajes.innerHTML = "";
    mensajes.classList.remove("rojo", "verde");

    const nombre = formulario.elements["nombre"].value.trim();
    const apellido = formulario.querySelector("#apellido").value.trim();
    const edad = formulario.edad.value;
    const sexo = formulario.genero.value;
    const suscribir = formulario.suscribir.checked; // no es value es checked
    const textarea = formulario.mensaje.value.trim();

    const email = formulario.email.value.trim();
    const tel = formulario.tel.value.trim();

    // Expresiones regulares
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telRegex = /^(?:(?:\+|00)34)?[67]\d{8}$/;
    const nombreOapellidoRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+([ '-][A-Za-zÁÉÍÓÚáéíóúÑñÜü]+)*$/;

    let validado = true;

    // Validaciones
    if (nombre.length < 3) {
        mensaje("El campo nombre debe contener al menos 3 caracteres");
        validado = false;
    }

    if (apellido.length < 3) {
        mensaje("El campo apellido debe contener al menos 3 caracteres");
        validado = false;
    }

    if (!nombreOapellidoRegex.test(nombre)) {
        mensaje("Por favor, ingresa un nombre válido.");
        validado = false;
    }

    if (!nombreOapellidoRegex.test(apellido)) {
        mensaje("Por favor, ingresa un apellido válido.");
        validado = false;
    }

    if (edad < 18 || edad > 150 || edad === "") {
        mensaje("Debes ser mayor de 18 y menor de 150 años");
        validado = false;
    }

    if (sexo === "") {
        mensaje("Elige tu sexo");
        validado = false;
    }

    if (!emailRegex.test(email)) {
        mensaje("Por favor, ingresa un email válido.");
        validado = false;
    }

    if (!telRegex.test(tel)) {
        mensaje("Por favor, ingresa un teléfono válido.");
        validado = false;
    }

    // Mostramos el resultado
    if (!validado) {

        mensaje("Por favor, corrige todos los errores del formulario");
        mensajes.classList.add("rojo");

    } else {

        mensajes.classList.add("verde");

        mensaje("Gracias por tu contacto. Has enviado estos datos:");

        mensaje(`
            <strong>Nombre:</strong> ${nombre}<br>
            <strong>Apellido:</strong> ${apellido}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Edad:</strong> ${edad}<br>
            <strong>Sexo:</strong> ${sexo}<br>
            <strong>Teléfono:</strong> ${tel}<br>
            <strong>Suscripción:</strong> ${suscribir ? "Sí" : "No"}<br>
            <strong>Mensaje:</strong> ${textarea}
        `);
    }


    function mensaje(texto) {
        mensajes.innerHTML += texto + "<br>";
    }

});

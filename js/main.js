const formulario = document.querySelector("#formulario1");
const mensajes = document.querySelector("#mensaje");
console.log(formulario);

formulario.addEventListener("submit", (ev)=>{

    mensajes.innerHTML = "";
    

    // por el name
    const nombre = formulario.elements["nombre"].value;
    const apellido = formulario.querySelector('#apellido').value
    const edad = formulario.edad.value;
    const sexo = formulario.genero.value;
    const checbox = formulario.suscribir.value;
    const textarea = formulario.mensaje.value;

    const email = formulario.email.value;
    const tel = formulario.tel.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telRegex = /^(?:(?:\+|00)34)?[6|7]\d{8}$/;
    const nombreOapellidoRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+([ '-][A-Za-zÁÉÍÓÚáéíóúÑñÜü]+)*$/


    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    console.log(sexo);
    console.log(checbox);
    console.log(textarea);
    console.log(email);
    console.log(tel);

    let validado = true
    

    if (nombre == "" || nombre.length < 3){
        mensaje ('El campo nombre debe contener al menos 3 caracteres')
        validado = false
    }
    if (apellido == "" || apellido.length < 3){
        mensaje ('El campo apellido debe contener al menos 3 caracteres')
        validado = false
    }

    if (!nombreOapellidoRegex.test(nombre)) {
        mensaje ("Por favor, ingresa un nombre válido.");
        validado = false
    }

    if (!nombreOapellidoRegex.test(apellido)) {
        mensaje ("Por favor, ingresa un apellido válido.");
        validado = false
    }

    if (edad < 18 || edad > 150){
        mensaje ('Debes ser mayor de 18 y menor de 150 años')
        validado = false
    }

    if (sexo == ""){
        mensaje ('Elige tu sexo')
        validado = false
    }


    if (!emailRegex.test(email)) {
        mensaje ("Por favor, ingresa un email válido.");
        validado = false
    }

    if (!telRegex.test(tel)) {
        mensaje ("Por favor, ingresa un teléfono válido.");
        validado = false
    }

    function mensaje (mensaje){
        mensajes.innerHTML += mensaje + '<br>';
    }


    if (!validado) {
      ev.preventDefault(); // Previene el envío si hay errores
      mensaje('Por favor corrija todos los errores del formulario')
      mensajes.classList.add('rojo');
    } else {
        ev.preventDefault(); // de momento prevego tambien para sacar estos datos
        mensajes.classList.add('verde');
        mensaje ("Gracias por su contacto has enviado estos datos:<br>")
        mensaje (`<strong>nombre</strong>: ${nombre} <br>
                  <strong>apellido:</strong> ${apellido} <br>
                  <strong>mail:</strong> ${email} <br>
                  <strong>edad:</strong> ${edad} <br>
                  <strong>sexo:</strong> ${sexo} <br>
                  <strong>tel:</strong> ${tel} <br>
                  <strong>Me siento del club:</strong> ${checbox} <br>  
                  <strong>Mensaje:</strong> ${textarea} <br>`);
    }
    

})
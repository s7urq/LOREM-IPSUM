const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario:     /^[a-zA-Z0-9\_\-]{4,10}$/,
	nombre:      /^[a-zA-Z\s]{1,20}$/, 
	password:    /^.{4,12}$/,
	correo:      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono:    /^\d{7,14}$/,
}

const campos = {
    usuario: false,
    nombre: false,
    password: false,
    password2: false,
    correo: false,
    telefono: false
}

const validarFormulario = (e) => {

    switch( e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
        break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validarPassword2()
        break;
        case "password2":
            validarPassword2();
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');

        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');

        break;
    }
}

const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('pass');
    const inputPassword2 = document.getElementById('pass2');

    if(inputPassword1.value !== inputPassword2.value){
        document.getElementById('password2').classList.add('formulario_grupo-incorrecto')
        document.getElementById('password2').classList.remove('formulario_grupo-correcto')
        document.querySelector('#password2 i').classList.add('fa-times-circle')
        document.querySelector('#password2 i').classList.remove('fa-check-circle')
        document.querySelector('#password2 .formulario_input_error').classList.add('formulario_input_error-activo')

        campos['password2'] = false

    }else{
        document.getElementById('password2').classList.remove('formulario_grupo-incorrecto')
        document.getElementById('password2').classList.add('formulario_grupo-correcto')
        document.querySelector('#password2 i').classList.remove('fa-times-circle')
        document.querySelector('#password2 i').classList.add('fa-check-circle')
        document.querySelector('#password2 .formulario_input_error').classList.remove('formulario_input_error-activo')

        campos['password2'] = true

    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`${campo}`).classList.remove('formulario_grupo-incorrecto')
        document.getElementById(`${campo}`).classList.add('formulario_grupo-correcto')
        document.querySelector(`#${campo} i`).classList.add('fa-check-circle')
        document.querySelector(`#${campo} i`).classList.remove('fa-times-circle')
        document.querySelector(`#${campo} .formulario_input_error`).classList.remove('formulario_input_error-activo')

        campos[campo] = true
    } else{
        document.getElementById(`${campo}`).classList.add('formulario_grupo-incorrecto')
        document.getElementById(`${campo}`).classList.remove('formulario_grupo-correcto')
        document.querySelector(`#${campo} i`).classList.add('fa-times-circle')
        document.querySelector(`#${campo} i`).classList.remove('fa-check-circle')
        document.querySelector(`#${campo} .formulario_input_error`).classList.add('formulario_input_error-activo')

        campos[campo] = false

    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.usuario && campos.nombre && campos.password && campos.password2 && campos.correo && campos.telefono && terminos.checked){
        formulario.reset();
        document.getElementById('formulario_mensaje-exito').classList.add('formulario_mensaje-exito-activo');
        setTimeout(() => {
        document.getElementById('formulario_mensaje-exito').classList.remove('formulario_mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.formulario_grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario_grupo-correcto');
        })
    }else{
        document.getElementById('formulario_mensaje').classList.add('formulario_mensaje-activo')
    }

})

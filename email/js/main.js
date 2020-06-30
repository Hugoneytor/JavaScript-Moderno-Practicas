// Variables
const form = document.getElementById('enviar-email');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const btnReset = document.getElementById('resetBtn');


//Listeners
function llamarFunciones(){
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);
    document.addEventListener('DOMContentLoaded', BtnFalse);

}

llamarFunciones();


//Funciones

function BtnFalse(){
    btnEnviar.disabled = true;
}

function validarCampo(){
    
    leerLongitud(this);

    if(this.type === 'email'){
        validarEmail(this)
    }

    let errores = document.querySelectorAll('.error')

    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        if(errores.length === 0){
            btnEnviar.disabled = false;
        }
    } 
}

function validarEmail(campo){
    let mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function leerLongitud(campo){
    if(campo.value !== ''){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error')
    }
}
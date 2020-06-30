//Variables
const form = document.querySelector('#enviar-mail');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('#enviar');
const loaders = document.querySelector('#loaders');
const resetBtn = document.querySelector('#resetBtn');

//Listeners


    //Deshabilitar boton de Enviar
    document.addEventListener('DOMContentLoaded', inicioApp);

    //Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //Boton de enviar en el submit
    form.addEventListener('submit', enviarEmail);
    resetBtn.addEventListener('click', resetFormulario);


//Funciones

function inicioApp(){
    //Deshabilitar boton de Envio
    btnEnviar.disabled = true;
}

//Envio del correo
function enviarEmail(e){
    e.preventDefault();

    //spinner al presionar enviar
    const spinnergif = document.querySelector('#spinner');
    spinnergif.style.display = 'block';

    //gif que envia email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block' ;

    //ocultar spinner y mostrar gif de enviado
    setTimeout(function(){
        spinnergif.style.display = 'none';

        loaders.appendChild(enviado);

        setTimeout(function(){
            enviado.remove();
            form.reset();
            inicioApp();
        },3000);


            
    }, 3000);

   
    
}

function validarCampo(){
    //Se valida la longitud del texto y que no este vacio.
    validarLongitud(this);

    //Validar solo el email
    if(this.type === 'email'){
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');
    
    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        if(errores.length === 0){
            btnEnviar.disabled = false;
        }
        
    }
}


function validarEmail(campo){
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error'); 
    }
}

function validarLongitud(campo){
     
    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
     }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error'); 
     }
}

function resetFormulario(e){
    e.preventDefault();
    form.reset();
}
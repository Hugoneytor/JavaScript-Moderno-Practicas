/* Es similar al factory,
se crea una abstraccion.(Es una capa aparte de la
 * funcionalidad ), Es decir no programas directamente en el codigo sino que
 * creas una capa extra y sobre ella programas
 */
//Un buen ejemplo para el builder seria un formulario

class Formulario {
    constructor() {
        this.campos = [];
    }

    agregarCampo(tipo, texto) {
        let campos = this.campos;

        let campo;

        switch (tipo) {
            case 'text':
                campo = new InputText(texto);
                break;
            case 'email':
                campo = new InputEmail(texto);
                break;
            case 'button':
                campo = new Button(texto);
                break;
            default:
                throw new Error('Tipo no valido' + tipo);
        }
        campos.push(campo);
    }

    obtenerFormulario(){
        let form = document.createElement('form'),
        campos = this.campos.length,
        campo;

        for(let i = 0; i < campos; i++){
            campo = this.campos[i];
            form.appendChild(campo.crearElemento());
            let br = document.createElement('br');
            form.appendChild(br);
        }
        return form;
    }
}

class Inputs {
    constructor(texto) {
        this.texto = texto;
    }
}

class InputText extends Inputs{
    constructor(texto){
        super(texto);
    }

    crearElemento(){
        const inputText = document.createElement('input');
        inputText.setAttribute('type', 'text');
        inputText.setAttribute('placeholder', this.texto);
        return inputText;
    }
}
class InputEmail extends Inputs{
    constructor(texto){
        super(texto);
    }

    crearElemento(){
        const inputEmail = document.createElement('input');
        inputEmail.setAttribute('type', 'email');
        inputEmail.setAttribute('placeholder', this.texto);
        return inputEmail;
    }
}

class Button extends Inputs{
    constructor(texto){
        super(texto);
    }

    crearElemento(){
        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.textContent = this.texto;
        return button;
    }
}

//instanciar formulario
const formulario = new Formulario();
formulario.agregarCampo('text', 'Pon tu nombre');
formulario.agregarCampo('email', 'Pon tu correo');
formulario.agregarCampo('button', 'Enviar formulario');

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('app').appendChild(formulario.obtenerFormulario());
});

console.log(formulario);

//Por eso se llama builder porque puedes construir en base a un tipo de objeto y te va ir creando distintos tipos, similar al factory
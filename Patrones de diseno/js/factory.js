// Es un tipo de patron de diseno para la creacion de objetos. El factory nos va
// ayudar a crear objetos de tipo similar pero no sabes aun que tipo van a ser o
// cual vas a utilizar dependiendo de la ejecucion del programa es la que
// decides cual se va a instanciar. OBJETOS DE TIPO SIMILAR

function constructorSitios() {
    this.crearElemento = function (texto, tipo) {
        let html;

        if (tipo === 'input') {
            html = new inputHTML(texto);
        } else if (tipo === 'img') {
            html = new ImagenHTML(texto);
        } else if (tipo === 'h1') {
            html = new HeadingHTML(texto);
        } else if (tipo === 'p') {
            html = new ParrafoHTML(texto);
        }

        html.tipo = tipo;

        html.mostrar = function(){
            const elemento = document.createElement(this.tipo);
            if(this.tipo === 'input'){
                elemento.setAttribute('placeholder', this.texto);
            }else if(this.tipo === 'img'){
                elemento.setAttribute('src', this.texto);
            }else{
                elemento.textContent = texto;
            }

            document.querySelector('#app').appendChild(elemento);
        }

        return html;
    }
}

const inputHTML = function(texto){
    this.texto = texto;
}
const ImagenHTML = function(texto){
    this.texto = texto;
}
const HeadingHTML = function(texto){
    this.texto = texto;
}
const ParrafoHTML = function(texto){
    this.texto = texto;
}

const sitioWeb = new constructorSitios();
//Almacenar elementos
const elementosWeb = [];

elementosWeb.push(sitioWeb.crearElemento('Mira esta imagen xd', 'img'))
elementosWeb.push(sitioWeb.crearElemento('Bienvenidos a mi nuevo sitio web', 'p'))
elementosWeb.push(sitioWeb.crearElemento('Hola Mundo', 'h1'))
elementosWeb.push(sitioWeb.crearElemento('lalalalala', 'input'))



elementosWeb.forEach(elemento =>{
    elemento.mostrar();
})

/* El factory 
Creas una instancia nueva
Tener distintas clases, objetos, no saber que tipo se va a instanciar pero en base a la ejecucion del programa tener todos los distintos */;

/*Esa es la idea del factoria, no saber que clases se van a instanciar pero conforme el programa se ejecute, tener distintos tipos de datos */

//Se tiene distintas clases y dependiendo de la ejecucion del programa se instancian unas u otras

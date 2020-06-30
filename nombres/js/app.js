const form = document.getElementById('generar-nombre');
form.addEventListener('submit', cargarNombres);

//llamado a ajax e imprimir resultado
function cargarNombres(e) {
    e.preventDefault()

    //leer las variables
    const nombre = document.getElementById('origen');
    const nombreSelected = nombre
        .options[nombre.selectedIndex]
        .value;
    const genero = document.getElementById('genero');
    const generoSelected = genero
        .options[genero.selectedIndex]
        .value;

    const cantidad = document
        .getElementById('numero')
        .value;

    let url = 'https://randomuser.me//api/?inc=results,name,gender,nat&';

    //si hay origen, agregarla a la url;

    if (nombreSelected !== '') {
        url+= `nat=${nombreSelected}&`;
    }
    if (nombreSelected !== '') {
        url+= `gender=${generoSelected}&`;
    }
    if (cantidad !== '') {
        url+= `results=${cantidad}&`;
    }

    //Conectar con Ajax
    //iniciar xml
    const xhr = new XMLHttpRequest();

    //Abrir la conexion
    xhr.open('GET',url,true);

    //Datos e impresion del template
    xhr.onload = function(){
        if(this.status === 200){
            const nombres = (JSON.parse(this.responseText).results);
            
            let htmlNombres = '<h2>Nombres generados</h2>';

            htmlNombres += '<ul class="lista">';

            //Imprimir cada nombre;
            nombres.forEach(element => {
                htmlNombres += `
                <li>${element.name.first} ${element.name.last}</li>
                `
            });

            htmlNombres += '</ul>';

            document.getElementById('resultado').innerHTML = htmlNombres;
        }
    };

    //Enviar el request
    xhr.send();
}
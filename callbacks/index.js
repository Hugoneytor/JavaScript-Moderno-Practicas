//Callback en foreach

const ciudades = ['Londres', 'New York', 'Paris', 'Madrid', 'Viena'];

//Se agrega un pais despues de 2 segundos
function nuevoPais(ciudade, callbakc){
    setTimeout(function(){
        ciudades.push(ciudade);
        callbakc();
    }, 2000);
    
}

//Los paises se muestran despues de 3 segundos
function mostrarPaises(){
    setTimeout(function(){
        let html = '';
        ciudades.forEach(ciudade =>{
            
            html += `<li>${ciudade}</li> `;

            
        });

        document.getElementById('app').innerHTML = html;
    }, 1000)
}

//Agregar nuevo Pais
nuevoPais('Mexico', mostrarPaises);

mostrarPaises();

console.log(ciudades)
// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

function ObtenerAutos(){
    return [
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        }, {
            marca: 'Audi',
            modelo: 'A4',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        }, {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        }, {
            marca: 'Audi',
            modelo: 'A6',
            year: 2010,
            precio: 35000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        }, {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        }, {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        }, {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        }, {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2019,
            precio: 80000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        }, {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        }, {
            marca: 'Audi',
            modelo: 'A3',
            year: 2017,
            precio: 55000,
            puertas: 2,
            color: 'Negro',
            transmision: 'manual'
        }, {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        }, {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        }, {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        }, {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2017,
            precio: 60000,
            puertas: 2,
            color: 'Negro',
            transmision: 'manual'
        }, {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        }, {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        }, {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        }, {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        }, {
            marca: 'Audi',
            modelo: 'A4',
            year: 2016,
            precio: 30000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        }
    ];
}

//Datos para la busqueda
let datosBusqueda = {
    marca : '',
    year: '',
    minimo: '',
    maximo: '',
    transmision: '',
    color: '',
    puertas: '',
}

const autos = ObtenerAutos();

//Event Listener
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(autos);
});

//Event Listeners para el formulario
const marca = document.getElementById('marca');
marca.addEventListener('input', (e)=>{
    datosBusqueda.marca = e.target.value;
    //Mandar a llamar la funcion de filtrar autos
    filtrarAuto();
})
const year = document.getElementById('year');
year.addEventListener('input', (e)=>{
    datosBusqueda.year = Number(e.target.value);
    //Mandar a llamar la funcion de filtrar autos
    filtrarAuto();
})
const minimo = document.getElementById('minimo');
minimo.addEventListener('input', (e)=>{
    datosBusqueda.minimo = Number(e.target.value);
    //Mandar a llamar la funcion de filtrar autos
    filtrarAuto();
})
const maximo = document.getElementById('maximo');
maximo.addEventListener('input', (e)=>{
    datosBusqueda.maximo = Number(e.target.value);
    //Mandar a llamar la funcion de filtrar autos
    filtrarAuto();
})

const puertas = document.getElementById('puertas');
puertas.addEventListener('input', (e)=>{
    datosBusqueda.puertas = Number(e.target.value);
    //Mandar a llamar la funcion de filtrar autos
    filtrarAuto();
})

const transmision = document.getElementById('transmision');
transmision.addEventListener('input', (e)=>{
    datosBusqueda.transmision = e.target.value;
    //Mandar a llamar la funcion de filtrar autos
    filtrarAuto();
})
const color = document.getElementById('color');
color.addEventListener('input', (e)=>{
    datosBusqueda.color = e.target.value;
    //Mandar a llamar la funcion de filtrar autos
    filtrarAuto();
})

function limpiarHTML(){
    const contenedor = document.querySelector('#resultado');
    //limpiar resultados anteriores
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}


function mostrarAutos(autos){
    const contenedor = document.querySelector('#resultado');
    
    limpiarHTML();
    
    //Construir el html de los autos
    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `
        <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmision: ${auto.transmision} - Precio: $${auto.precio} - color: ${auto.color}</p>`;
        contenedor.appendChild(autoHTML);
    });
    
}

function sinResultados(){
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.innerText = 'No hay resultados';

    document.getElementById('resultado').appendChild(noResultado);
}

//Un higher order function es basicamente una funcion que toma otra funcion como su argumento
function filtrarAuto(){
    const resultado = ObtenerAutos().filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        sinResultados();
    }
}   

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }else{
        return auto;
    }
}

function filtrarYear(auto){
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }else{
        return auto;
    }
}

function filtrarMinimo(auto){
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    }else{
        return auto;
    }
}

function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }else{
        return auto;
    }
}

function filtrarPuertas(auto){
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    }else{
        return auto;
    }
}

function filtrarTransmision(auto){
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    }else{
        return auto;
    }
}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    }else{
        return auto;
    }
}
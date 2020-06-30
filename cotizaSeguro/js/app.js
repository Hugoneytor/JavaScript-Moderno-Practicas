//Constructor para seguro;

const form = document.getElementById('cotizar-seguro');
form.addEventListener('submit', cotizar);

function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo
}

Seguro.prototype.cotizarSeguro = function () {

    const base = 2000;
    let cantidad;

    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
    }

    //leer anio
    const diferencia = new Date().getFullYear() - this.anio;
    cantidad -= (((diferencia * 3) * cantidad) / 100);

    //Seguro basico = 30% mas Seguro completo = 50% mas

    if (this.tipo === 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }

    //cada anio de diferencia se reduce 3% el valor del seguro
    return cantidad;
}

//Todo lo que se muestra en la interfaz
function Interfaz() {}
Interfaz.prototype.mostrarMensaje = function (mensaje, tipo) {
    const div = document.createElement('div');
    if (tipo === 'error') {
        div.classList = 'error';

    } else {
        div.classList = 'correcto';
    }
    div.innerHTML = `${mensaje}`;
    form.insertBefore(div, document.querySelector('.form-group'));

    setTimeout(function () {
        div.remove();
    }, 3000);

}

Interfaz.prototype.mostrarResultado = function (seguro, cantidad) {
    const resultado = document.getElementById('resultado');
    let marca;

    switch (seguro.marca) {
        case '1':
            marca = 'Americano';
            break;
        case '2':
            marca = 'Asiatico';
            break;
        case '3':
            marca = 'Europeo';
    }

    const div = document.createElement('div');
    div.innerHTML = `
    <p class="header">Tu resumen:</p> 
    Marca: ${marca}<br>
    Año: ${seguro.anio}<br>
    Tipo: ${seguro.tipo}<br>
    Total: ${cantidad}`;

    const spinner = document.querySelector('#cargando img');
    spinner.style.display = 'block';
    setTimeout(function () {
        spinner.style.display = 'none';
        resultado.appendChild(div);
    }, 3000);

}

//Event listeners

function cotizar(e) {
    e.preventDefault();

    //leer marca
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca
        .options[marca.selectedIndex]
        .value;

    //leer anio
    const anio = document.getElementById('anio');
    const anioSeleccionado = anio
        .options[anio.selectedIndex]
        .value;

    //leer el valor del radio button
    const tipo = document
        .querySelector('input[name="tipo"]:checked')
        .value;

    //crear instancia de interfaz
    const interfaz = new Interfaz();
    //revisamos que no este vacio
    if (marcaSeleccionada === '' || anioSeleccionado === '' || tipo === '') {
        interfaz.mostrarMensaje('Faltan datos', 'error');
    } else {
        const resultados = document.querySelector('#resultado div');
        if (resultados != null) {
            resultados.remove();
        }

        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);

        const cantidad = seguro.cotizarSeguro();
        //mostrar resultado

        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostrarMensaje('Cotizando...', 'exito');

        //Limpiar resultados anteriores

    }
}

const max = new Date().getFullYear();
const min = max - 20;

const selectAnios = document.getElementById('anio');

for (let i = max; i >= min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}

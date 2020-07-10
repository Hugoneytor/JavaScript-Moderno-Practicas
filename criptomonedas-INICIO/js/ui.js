class Interfaz {
    constructor() {
        this.init();
    }

    init() {
        this.construirSelect();
    }

    construirSelect() {
        cotizador
            .obtenerMonedasApi()
            .then(monedas => {

                //Mandar a llamar al select
                const select = document.getElementById('criptomoneda');

                //iterar los resultados de la api convirtiendolos en vector
                for (const [key, value] of Object.entries(monedas.monedas.Data)) {
                    //anadir el symbol y el nombre
                    const option = document.createElement('option');
                    option.value = value.Symbol;
                    option.innerText = value.CoinName;

                    select.appendChild(option);
                }

            })
            


        }

    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        const mensajes = document.querySelector('.mensajes');
        mensajes.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 3000);
    }

    //mostar resultado de la cotizacion
    mostrarResultado(resultado, moneda, criptomoneda) {
        const resultadoAnterior = document.querySelector('#resultado > div');
        if(resultadoAnterior){
            resultadoAnterior.remove()
        }

        const datosMoneda = resultado[criptomoneda][moneda];


        //recortar digitos de precio
        let precio = datosMoneda.PRICE.toFixed(2);
        let porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2);
        let ultimaActualizacion = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-MX');
        //construir el template
        let html = `
        <div class ="card bg-warning">
            <div class="card-body text-light">
                <h2 class="card-title">Resultado</h2>
                <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: ${precio}</p>
                <p>Variacion del ultimo dia: %${porcentaje}</p>
                <p>Ultima Actualizacion: ${ultimaActualizacion}</p>
            </div>
        </div>`;

        this.mostrarOcultarSpinner('block');
        
        setTimeout(()=>{
            this.mostrarOcultarSpinner('none');
            document.querySelector('#resultado').innerHTML = html;

        }, 3000)        

    }

    mostrarOcultarSpinner(vista){
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = vista;
    }
    
}
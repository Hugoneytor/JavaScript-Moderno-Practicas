const cotizador = new Api('b133801f3a7886c6777f5680656159d312ce8ecb4cfeaf1656c47cafae2a93fa');
const ui = new Interfaz();

const form = document.querySelector('#formulario');

form.addEventListener('submit', (e)=>{
    e.preventDefault();


    //leer los select
    const moneda = document.getElementById('moneda');
    const criptomoneda = document.getElementById('criptomoneda');

    const coinSelected = moneda.options[moneda.selectedIndex].value;
    const criptoSelected = criptomoneda.options[criptomoneda.selectedIndex].value;

    //Validar Formulario
    if(coinSelected === '' || criptoSelected === ''){
        ui.mostrarMensaje('Se seleccionar ambos campos', 'alert bg-danger text-center')
    }else{
        //Consultar la api
        cotizador.obtenerValores(coinSelected, criptoSelected)
        .then(data=>{
            ui.mostrarResultado(data.resultado.RAW, coinSelected, criptoSelected);
    
        })
        .catch(error=> error);
    }

})
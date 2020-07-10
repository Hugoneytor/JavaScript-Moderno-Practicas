class Api{
    constructor(apikey){
    this.apikey = apikey;
    }

    //Obtener todas las monedas
    async obtenerMonedasApi() {
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

        //fetch a la api
        const urlObtenerMonedad = await fetch(url);
        //repuesta en json
        const monedas = await urlObtenerMonedad.json();

        return {monedas};

    }

    async obtenerValores(moneda, criptoMoneda){
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}&api_key=${this.apikey}`;

        //consultar en rest api
        const urlConvertir = await fetch(url);

        const resultado = await urlConvertir.json();

        return {resultado};

    }
}
class EventBrite{
    constructor(){
        this.token_auth = '5NVTCCAPPL5OY7MHSP54';
        this.ordenar = 'date';
    }
    //mostar Resultados de la busqueda
    async obtenerEventos(evento, categoria){
        const respuestaEvento = await fetch('')
    }

    //obtiene las categorias en init
    async obtenerCategorias(){
        //consultar las categorias en la rest api de event brite
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        //esperar las respuestas de las categorias y devolver un json
        const categorias = await respuestaCategorias.json();

        //devolvemos el resultado
        return {categorias};
    }
}
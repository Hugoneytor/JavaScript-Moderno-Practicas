class UI {
    constructor() {

        this.api = new API();
        //Crear los markers con layer group
        this.markers = new L.LayerGroup();
        // Iniciar el mapa
        this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
        // Inicializar y obtener la propiedad del mapa
        const map = L
            .map('mapa')
            .setView([
                19.390519, -99.3739778
            ], 6);
        const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L
            .tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; ' + enlaceMapa + ' Contributors',
                maxZoom: 18
            })
            .addTo(map);
        return map;

    }

    mostrarEstablecimientos(){
        this.api.obtenerDatos()
        .then((datos)=>{
            const resultado = datos.respuesta.results;

            //ejecutar la funcion para mostrar los pines
            this.mostarPines(resultado)
        })
    }

    mostarPines(datos){
        //Limpiar los markers antes de hacer la busqueda
        this.markers.clearLayers();

        //recorrer los establecimientos
        datos.forEach(element => {
            //destructuring
            const {latitude, longitude, calle, regular, premium} = element;
            //Crear PopUp
            const opcionesPopUp = L.popup()
            .setContent(`<p><b>Calle:</b> ${calle}</p>
            <p><b>Regular:</b> ${regular}</p>
            <p><b>Premium:</b> ${premium}</p>`);

            //agregar el pin
            const marker = new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]).bindPopup(opcionesPopUp);
            this.markers.addLayer(marker);

        });
        this.markers.addTo(this.mapa);
    }

    obtenerSugerencias(busqueda){
        this.api.obtenerDatos()
        .then(datos =>{
            const resultados = datos.respuesta.results;

            //Enviar el JSON y la busqueda para el filtrado
            this.filtarSugerencias(resultados, busqueda);
        })
    }
    //filtra las sugerencias en base al input
    filtarSugerencias(resultado, busqueda){
        //filtrar con .filter
        const filtro = resultado.filter(filtro=>filtro.calle.indexOf(busqueda) !== -1);
        console.log(filtro);
        
        //mostrar los pines
        this.mostarPines(filtro);
    }

}
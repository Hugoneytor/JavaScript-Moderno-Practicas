const eventBrite = new EventBrite();
const ui = new Interfaz();

//listener al buscador de eventos

document.getElementById('buscarBtn').addEventListener('click', (e)=>{
    e.preventDefault();

    //Buscar o leer el texto del input
    const textoBuscador = document.getElementById('evento').value;

    //leer el select
    const categorias = document.getElementById('listado-categorias');
    const catSeleccionada = categorias.options[categorias.selectedIndex].value;

    //revisar el formulario
    if(textoBuscador === ''){
        ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4');
    }else{
        //cuando si hay busqueda
        eventBrite.obtenerEventos(texto, categoria)
        
    }
})
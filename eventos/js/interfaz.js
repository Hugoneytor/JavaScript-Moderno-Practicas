class Interfaz{
    constructor(){
        this.init();
        //Resultado de eventos
        this.listado = document.getElementById('resultado-eventos');
    }

    //metodo para la iniciacion de la app
    init(){
        //imprimir categorias de la rest api
        this.imprimirCategorias();
    }

    //imprimir categorias
    imprimirCategorias(){
        const listaCategorias = eventBrite.obtenerCategorias()
        .then(categorias =>{
            const cats = categorias.categorias.categories;

            console.log(cats)
            //seleccionar el select de categorias;
            const selectCategorias = document.getElementById('listado-categorias');

            //recorremos el arreglo e imprimimos los option
            cats.forEach(element => {
                const option = document.createElement('option');
                option.value = element.id;
                option.innerText = element.name;
                selectCategorias.appendChild(option);
            });
        })
    }

    //metodo para imprimir mensajes
    mostrarMensaje(mensaje,clases){
        const div = document.createElement('div');
        div.className = clases;
        div.innerText = mensaje;

        const buscadorDiv = document.querySelector('#buscador');

        buscadorDiv.appendChild(div);

        //quitar el alert despues de 3 segundos
        setTimeout(()=>{
            this.limpiarMensaje();
        }, 3000)

    }

    //desaparece el mensaje en caso de que exista
    limpiarMensaje(){
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }
}
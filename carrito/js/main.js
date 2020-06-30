//Variables Globales
const carrito = document.querySelector('#carrito');

const listaCarrito = document.querySelector('#lista-carrito tbody');

const listaCursos = document.querySelector('#lista-cursos');

const vaciarCarrito = document.querySelector('#vaciar-carrito');

//Llamadas


function ejecutarFunciones(){

    listaCursos.addEventListener('click', agregarACarrito);

    carrito.addEventListener('click', eliminarDelCarrito);

    vaciarCarrito.addEventListener('click', EliminarCarrito);

}

ejecutarFunciones();





//Funciones
function agregarACarrito(e){
    e.preventDefault();
    let curso;
    if(e.target.classList.contains('agregar-carrito')){
        curso = e.target.parentElement.parentElement;
        leerCurso(curso);
    }
    
    
}

function leerCurso(curso){
    const infoCurso = {
        img : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id : curso.querySelector('a').getAttribute('data-id')
    }
    
    insertarACarrito(infoCurso);
    //AgregarALocalStorage();
}

function insertarACarrito(curso){
    let row = document.createElement('tr');
    row.innerHTML = `
    <td>
    <img src=${curso.img} width=100px>
    </td>
    <td>
    ${curso.titulo}
    </td>
    <td>
    ${curso.precio}
    </td>
    <td>
    <a href='#' class="borrar-curso"  data-id=${curso.id}>X</a>
    </td>`
    listaCarrito.appendChild(row);

}


function eliminarDelCarrito(e){
    e.preventDefault();

    if(e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
    }
    return false;
}

function EliminarCarrito(){

    while(listaCarrito.firstChild){
        if(listaCarrito.firstChild){
            listaCarrito.firstChild.remove();
        }  
    }
    
}
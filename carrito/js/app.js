//Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');



//Listeners
cargarEventListeners();

function cargarEventListeners() {
    //Se ejecuta cuando presionas "Agregar al carrito";
    cursos.addEventListener('click', comprarCurso);

    //cuando se elimina un curso del carrito
    carrito.addEventListener('click', eliminarDelCarrito);

    //Vaciar carrito
    vaciarCarrito.addEventListener('click', borrarCarrito);

    //Actualizar en localSTORAGE
    document.addEventListener('DOMContentLoaded', cargarLocalStorage);

}

//Funciones Funcion que anade el curso al carrito
function comprarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        //Delegation para seleccionar solo el boton de agregar al carrito.
        const curso = e.target.parentElement.parentElement;

        //Obtencion de la informacion del curso seleccionado
        leerDatosDelCurso(curso);

    }
}

//lee los datos del curso

function leerDatosDelCurso(curso) {
    const infoCurso = {
        imagen: curso
            .querySelector('img')
            .src,
        titulo: curso
            .querySelector('h4')
            .textContent,
        profesor: curso
            .querySelector('p')
            .textContent,
        precio: curso
            .querySelector('.precio span')
            .textContent,
        id: curso
            .querySelector('a')
            .getAttribute('data-id')
    }

    agregarALocalStorage(infoCurso);
    insertarCarrito(infoCurso);

}

//muestra el curso en el carrito

function insertarCarrito(curso) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
        <img src="${curso.imagen}" width=100px>  
        </td>

        <td>
        ${curso.titulo} <br>
        </td>

        <td>
        ${curso.precio}
        </td>

        <td>
        <a href = '#' class="borrar-curso" data-id = "${curso.id}"> X </a>
        </td>

    `;
    listaCursos.appendChild(row);
    
}

function agregarALocalStorage(curso){
    let cursos;
    cursos = leerLocalStorage();
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));

}

function leerLocalStorage(){
    let cursos;
    if(localStorage.getItem('cursos')===null){
        cursos = [];
    }else{
        cursos = JSON.parse(localStorage.getItem('cursos'));
    }
    return cursos;
}

//Elimina el curso del carrito
function eliminarDelCarrito(e){
    e.preventDefault()
    let curso, cursoId;
    if(e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();

        curso = e.target.parentElement.parentElement;

        cursoId = curso.querySelector('a').getAttribute('data-id');

        
    }
    eliminarDeLocalStorage(cursoId);
}

 function eliminarDeLocalStorage(cursoElegido){
    let cursos = leerLocalStorage();
    

    cursos.forEach(function(curso, index){
        if(curso.id === cursoElegido){
            cursos.splice(index,1);
        }
    });

    localStorage.setItem('cursos', JSON.stringify(cursos));

 }


function borrarCarrito(e){
    e.preventDefault();
    /* Forma lenta, con menos codigo
    listaCursos.innerHTML = '';
    return false;
    */
   //forma rapida, con mas codigo y recomendada
   while(listaCursos.firstChild){
       listaCursos.removeChild(listaCursos.firstChild);
   }

   borrarCarritoDeLocalStorage();

}
function borrarCarritoDeLocalStorage(){
    localStorage.removeItem('cursos');
}

function cargarLocalStorage(){
    let cursos;
    cursos = leerLocalStorage();

    cursos.forEach(element => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
            <img src="${element.imagen}" width=100px>  
            </td>
    
            <td>
            ${element.titulo} <br>
            </td>
    
            <td>
            ${element.precio}
            </td>
    
            <td>
            <a href = '#' class="borrar-curso" data-id = "${element.id}"> X </a>
            </td>
    
        `;
        listaCursos.appendChild(row);

    });
}
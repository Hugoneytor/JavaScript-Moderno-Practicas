const listaCursos = document.querySelector('#lista-cursos');
const listaCarrito = document.querySelector('#lista-carrito tbody')
const carrito = document.querySelector('#carrito');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');


listaCursos.addEventListener('click', agregarACarrito);
listaCarrito.addEventListener('click', borrarCurso);
vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
document.addEventListener('DOMContentLoaded', cargarLocalStorage);


//AGREGAR Y ELIMINAR CURSOS

function agregarACarrito(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        leercurso(e.target.parentElement.parentElement);
    }
}

function leercurso(curso){
    const infoCurso = {
        img: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('p span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')

    }
    agregarCurso(infoCurso);
    agregarCursoLocalStorage(infoCurso);
}

function agregarCurso(curso){
    let row = document.createElement('tr');
    row.innerHTML = `
    <td>
    <img src="${curso.img}" width = 100px >
    </td>
    <td>
    ${curso.titulo}
    </td>
    <td>
    ${curso.precio}
    </td>
    <td>
    <a class="borrar-curso" href="#" data-id="${curso.id}">X</a>
    </td>    
    `;
    listaCarrito.appendChild(row)
}

function borrarCurso(e){
    e.preventDefault();
    let curso, cursoID;
    if(e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove()
        curso = e.target.parentElement.parentElement;
        cursoID = curso.querySelector('a').getAttribute('data-id')
        ;
        
    }
    eliminarCursoLocalStorage(cursoID);
}

function vaciarCarrito(e){
    e.preventDefault();
    
    while(listaCarrito.firstChild){
        listaCarrito.firstChild.remove();
    }

    vaciarCarritoLocalStorage();
}

//LOCAL STORAGE

function agregarCursoLocalStorage(curso){
    let cursos;
    cursos = leerLocalStorage();
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));
}

function leerLocalStorage(){
    let cursos;
    if(localStorage.getItem('cursos') === null){
        cursos = [];
    }else{
        cursos = JSON.parse(localStorage.getItem('cursos'));
    }
    return cursos;
}

function eliminarCursoLocalStorage(cursoElegido){
    let cursos = leerLocalStorage();

    cursos.forEach(function(curso, index){
        if(curso.id === cursoElegido){
            cursos.splice(index,1);
        }
    });

    localStorage.setItem('cursos', JSON.stringify(cursos));
}

function cargarLocalStorage() {
    let cursos;
    cursos = leerLocalStorage();

    cursos.forEach(element => {
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>
        <img src="${element.img}" width = 100px >
        </td>
        <td>
        ${element.titulo}
        </td>
        <td>
        ${element.precio}
        </td>
        <td>
        <a class="borrar-curso" href="#">X</a>
        </td>    
        `;
        listaCarrito.appendChild(row)
    });
}

function vaciarCarritoLocalStorage(){
    localStorage.removeItem('cursos');
}
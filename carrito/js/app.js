//Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');

//Listeners
cargarEventListeners();

function cargarEventListeners() {
    //Se ejecuta cuando presionas "Agregar al carrito";
    cursos.addEventListener('click', comprarCurso)

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
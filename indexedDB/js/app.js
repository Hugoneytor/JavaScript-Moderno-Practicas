let DB;

//Selectores de la interfaz
const form = document.querySelector('form'),
    nombreMascota = document.getElementById('mascota'),
    nombreCliente = document.getElementById('cliente'),
    telefono = document.getElementById('telefono'),
    fecha = document.getElementById('fecha'),
    hora = document.getElementById('hora'),
    sintomas = document.getElementById('sintomas'),
    citas = document.getElementById('citas'),
    headingAdministra = document.getElementById('administra');

//Esperar por DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    //Crear la base de datos
    let crearDB = window
        .indexedDB
        .open('citas', 1);

    //Si hay error enviarlo a la consola
    crearDB.onerror = function () {
        console.log('Hugo un error');
    }

    //si todo esta bien mostrar en consola y asignar la base de datos
    crearDB.onsuccess = function () {
        // console.log('Todo listo') Asignar a la base de datos
        DB = crearDB.result;
        mostrarCitas();
    }

    // Este metodo  solo corre una vez y es ideal para crear el schema para la base
    // de datos
    crearDB.onupgradeneeded = function (e) {
        //El evento es la misma base de datos
        let db = e.target.result;
        console.log(db);

        // Definir el object store, toma 2 parametros. El nombre de la base de datos y
        // las opciones keyPath es el indice de la base de datos
        let objectStore = db.createObjectStore('citas', {
            keyPath: 'key',
            autoIncrement: true
        });

        // Crear los indices y los campos de las bases de datos, createIndex. 3
        // parametros: nombre, keypath y opciones

        objectStore.createIndex('mascota', 'mascota', {unique: false})
        objectStore.createIndex('cliente', 'cliente', {unique: false})
        objectStore.createIndex('telefono', 'telefono', {unique: false})
        objectStore.createIndex('fecha', 'mascota', {unique: false})
        objectStore.createIndex('hora', 'mascota', {unique: false})
        objectStore.createIndex('sintomas', 'mascota', {unique: false})

        console.log('Listo')
    }

})

//cuando el formulario se envia
form.addEventListener('submit', agregarDatos);

function agregarDatos(e) {
    e.preventDefault();

    const nuevaCita = {
        mascota: nombreMascota.value,
        cliente: nombreCliente.value,
        telefono: telefono.value,
        fecha: fecha.value,
        hora: hora.value,
        sintomas: sintomas.value
    }
    //console.log(nuevaCita) En indexedDB se utilizan las transactiones
    let transaction = DB.transaction(['citas'], 'readwrite');
    let objectStore = transaction.objectStore('citas');
    //console.log(objectStore);

    let peticion = objectStore.add(nuevaCita);
    console.log(peticion)
    peticion.onsuccess = () => {
        form.reset();
    }
    transaction.oncomplete = () => {
        console.log('Cita agregada');
        mostrarCitas();
    }
    transaction.onerror = () => {
        console.log('Hugo un error');
    }

}

function mostrarCitas() {
    //limpiar las citas anteriores
    while (citas.firstChild) {
        citas.removeChild(citas.firstChild)
    }
    //Creamos un object store
    let objectStore = DB
        .transaction('citas')
        .objectStore('citas');

    //Esto retorna una peticion
    objectStore
        .openCursor()
        .onsuccess = function (e) {
            //Cursor se va a indicar en el registro indicado para acceder a los datos
            let cursor = e.target.result;

            //console.log(cursor);
            if (cursor) {
                let citaHTML = document.createElement('li');
                citaHTML.setAttribute('data-cita-id', cursor.value.key);
                citaHTML
                    .classList
                    .add('list-group-item');

                citaHTML.innerHTML = `
                 <p class="font-weight-bold">Mascota: <span class="font-weight-normal">${cursor.value.mascota}</span></p>
                 <p class="font-weight-bold">cliente: <span class="font-weight-normal">${cursor.value.cliente}</span></p>
                 <p class="font-weight-bold">telefono: <span class="font-weight-normal">${cursor.value.telefono}</span></p>
                 <p class="font-weight-bold">fecha: <span class="font-weight-normal">${cursor.value.fecha}</span></p>
                 <p class="font-weight-bold">hora: <span class="font-weight-normal">${cursor.value.hora}</span></p>
                 <p class="font-weight-bold">sintomas: <span class="font-weight-normal">${cursor.value.sintomas}</span></p>`

                 //boton de borrar
                 const botonBorrar = document.createElement('button');
                 botonBorrar.classList.add('borrar', 'btn', 'btn-danger');
                 botonBorrar.innerHTML = `<span aria-hidden="true">Eliminar</span> `
                 botonBorrar.onclick = borrarCitas;
                 citaHTML.appendChild(botonBorrar);
                //append en el padre
                citas.appendChild(citaHTML);

                //consulta los proximos registros
                cursor.continue();
            } else {
                if (!citas.firstChild) {
                    //Cuando no hay registros
                    headingAdministra.textContent = `Agrega citas para comenzar`
                    let listado = document.createElement('p');
                    listado
                        .classList
                        .add('text-center');
                    listado.textContent = 'No hay registros';

                    citas.appendChild(listado);
                }else{
                    headingAdministra.textContent = 'Administra tu cita';
                }

            }
        }

}

function borrarCitas(e){
    let citaID = Number(e.target.parentElement.getAttribute("data-cita-id"));

    let transaction = DB.transaction(['citas'], 'readwrite');
    let objectStore = transaction.objectStore('citas');
    //console.log(objectStore);

    let peticion = objectStore.delete(citaID);

    transaction.oncomplete = ()=>{
        e.target.parentElement.parentElement.removeChild(e.target.parentElement)

        console.log(`Se elimino la cita con el id ${citaID}`);

        if (!citas.firstChild) {
            //Cuando no hay registros
            headingAdministra.textContent = `Agrega citas para comenzar`
            let listado = document.createElement('p');
            listado
                .classList
                .add('text-center');
            listado.textContent = 'No hay registros';

            citas.appendChild(listado);
        }else{
            headingAdministra.textContent = 'Administra tu cita';
        }
    }
}
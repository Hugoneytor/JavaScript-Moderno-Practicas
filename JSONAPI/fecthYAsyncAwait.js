const listado = document.getElementById('listado');
const cargar = document.getElementById('cargar')
cargar.addEventListener('click', leerTodos);

async function leerTodos(){
    //esperar respuesta
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos')

    const datos = await respuesta.json();

    return datos;

}

leerTodos()
.then(res=> res)
.then(data => {
    let html =``;
    data.forEach(element => {
        html += `<li>${element.userId} ${element.title}</li>`
    });
    listado.innerHTML = html;
})
.catch(error=> error);
const cargarPost = document
    .getElementById('cargar')
    .addEventListener('click', cargarApi);

function cargarApi() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr.onload = function () {
        const respuesta = (JSON.parse(this.responseText))

        let contenido = ''
        respuesta.forEach(element => {
            contenido += `
            
            <h3>userId: ${element.userId}</h3>
            <p>id: ${element.id}</p>
            <li>title: ${element.title}</li>
            <li>body: ${element.body}</li>
            `
        });
        document
            .querySelector('#listado')
            .innerHTML = contenido;
    }

    xhr.send();
}
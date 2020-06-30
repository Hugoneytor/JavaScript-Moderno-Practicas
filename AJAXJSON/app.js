const boton1 = document.getElementById('boton1');
boton1.addEventListener('click', function () {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleado.json', true);;

    xhr.onload = function () {
        if (this.status === 200) {
            const persona = JSON.parse(this.responseText)

            const htmlTemplate = `
            <ul>
            <li>Id: ${persona
                .id}</li>
            <li>Nombre: ${persona
                .nombre}</li>
            <li>Empresa: ${persona
                .Empresa}</li>
            <li>Trabajo: ${persona
                .trabajo}</li>
            </ul>`

                document
                .getElementById('empleado')
                .innerHTML = htmlTemplate;
        }
    }

    xhr.send();
});

const boton2 = document.querySelector('#boton2');

boton2.addEventListener('click', function () {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleados.json', true);;

    xhr.onload = function () {
        if (this.status === 200) {
            const personal = JSON.parse(this.responseText);

            const imprimir = document.getElementById('empleados')

            let htmlTemplate = '';
            personal.forEach(function (persona) {
              htmlTemplate += `
            <ul>
            <li>Id: ${persona.id}</li>
            <li>Nombre: ${persona.nombre}</li>
            <li>Empresa: ${persona.Empresa}</li>
            <li>Trabajo: ${persona.trabajo}</li>
            </ul>`

            imprimir.innerHTML = htmlTemplate;
            })

            
        }
    }

    xhr.send();
});
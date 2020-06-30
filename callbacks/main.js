const paises = ['Mexico', 'Peru', 'Guatemala', 'USA', 'Canada'];

const nuevoPais = 'Rusia';

function insertarNuevoPais(nuevo, callback) {

    setTimeout(function () {
        paises.push(nuevo);
        callback();
    }, 2000);
};

function agregarPaises() {
    setTimeout(function () {
        let html = '';
        html += `<ul>`;
        paises.forEach(function (pais) {
            html += `<li>${pais}</li>`;
        });
        html += `</ul>`;
        document
            .querySelector('#app')
            .innerHTML = html;
    }, 1000);
}

insertarNuevoPais(nuevoPais, agregarPaises);

agregarPaises();

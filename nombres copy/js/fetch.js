const form = document.getElementById('generar-nombre');
form.addEventListener('submit', cargarNombres);

const resultado = document.getElementById('resultado');

function cargarNombres(e) {
    e.preventDefault();
    const nombreOrigen = document.getElementById('origen');
    const origenSelected = nombreOrigen
        .options[nombreOrigen.selectedIndex]
        .value;

    const genero = document.getElementById('genero');
    const generoSelected = genero
        .options[genero.selectedIndex]
        .value;

    const numero = document
        .getElementById('numero')
        .value;

    console.log(origenSelected, generoSelected, numero);

    let url = 'https://randomuser.me//api/?inc=results,name,gender,nat&';

    if (origenSelected !== '') {
        url += `nat=${origenSelected}&`
    }
    if (generoSelected !== '') {
        url += `gender=${generoSelected}&`;
    }
    if (numero !== '') {
        url += `results=${numero}&`;
    }

    //Consulta con fetch

    fetch(url)
    .then(res=> res.json())
    .then(data => {
        let dataResult = data.results;
        let html = '<h2>Nombres Generados</h2><ul class="lista">';
        dataResult.forEach(element => {
            html += `<li>${element.name.first}</li>`;
        });
        html += '</ul>';
        resultado.innerHTML = html;
        console.log(dataResult);
    })
    .catch(error=> console.log(error) );

}
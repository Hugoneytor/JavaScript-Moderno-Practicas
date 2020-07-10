const txtBtn = document.getElementById('txtBtn');
txtBtn.addEventListener('click', cargarTxt);
const jsonBtn = document.getElementById('jsonBtn');
jsonBtn.addEventListener('click', cargarJson);
const apiBtn = document.getElementById('apiBTN');
apiBtn.addEventListener('click', cargarApi);

const resultado = document.getElementById('resultado');


function cargarTxt(){
    fetch('datos.txt')
    .then(res => res.text())
    .then(data => resultado.innerHTML = data)
    .catch(error => resultado.innerHTML = error);
}

function cargarJson(){
    fetch('empleados.json')
    .then(res=>res.json())
    .then(data=>{
        let html = '';
        data.forEach(element => {
            html += `<li>Nombre: ${element.nombre}, Puesto: ${element.puesto}</li>`
        });
        resultado.innerHTML = html;
    })
    .catch(error => resultado.innerHTML = error);
}

function cargarApi(){
    fetch('https://picsum.photos/list')
    .then(res => res.json())
    .then(imagenes => {
        let html ='';
        imagenes.forEach(function(imagen){
            html+=`
            <li>
            <a target="_BLANK" href="${imagen.post_url}">Ver imagen</a>
            ${imagen.author}
            </li>`
        });
        resultado.innerHTML = html;
    })
    .catch(error=> resultado.innerHTML = error);
}
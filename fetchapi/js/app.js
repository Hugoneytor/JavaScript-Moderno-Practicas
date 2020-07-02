const txtBtn = document.getElementById('txtBtn');
txtBtn.addEventListener('click', cargarTxt);
const jsonBtn = document.getElementById('jsonBtn');
jsonBtn.addEventListener('click', cargarJson);
const apiBtn = document.getElementById('apiBTN');
apiBtn.addEventListener('click', cargarApi);

const resultado = document.getElementById('resultado');


function cargarTxt(){
    fetch('datos.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(data);
        resultado.innerHTML = data;
    })
    .catch(function(error){
        resultado.innerHTML = error;
    })
 
}

function cargarJson(){
    fetch('empleados.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let html = '';
        data.forEach(element => {
            html += `<li>Nombre: ${element.nombre}, Puesto: ${element.puesto}</li>`
        });
        resultado.innerHTML = html;
    })
    .catch(function(error){
        resultado.innerHTML = error;
    });
}

function cargarApi(){
    fetch('https://picsum.photos/list')
    .then(function(res){
        return res.json();
    })
    .then(function(imagenes){
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
    //.catch(function(){})
}
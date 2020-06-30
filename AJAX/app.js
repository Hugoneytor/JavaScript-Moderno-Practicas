document.querySelector('#cargar').addEventListener('click', cargarDatos);

function cargarDatos(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'datos.txt', true);


    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            console.log(this.responseText);
        }
    }

    // xhr.onload = function(){
    //     if(this.status === 200){
    //         document.querySelector('#listado').innerHTML = 
    //         `<h2>${this.responseText}</h2>`
    //     }
    // }

    xhr.send();
}




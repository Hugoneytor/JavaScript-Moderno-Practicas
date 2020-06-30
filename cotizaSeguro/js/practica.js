const form = document.querySelector('#cotizar-seguro').addEventListener('submit', cotizar);



    const anio = document.getElementById('anio');
    const max = new Date().getFullYear();
    const min = max - 20;

    for(let i = max; i >= min; i--){
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        anio.appendChild(option);
    }
    




function cotizar(e){
    e.preventDefault();

    const marca = document.getElementById('marca');
    const marcaSelected = marca.options[marca.selectedIndex].value;

    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    const anio = document.getElementById('anio')
    const anioSelected = anio.options[anio.selectedIndex].value

    console.log(marcaSelected,anioSelected, tipo);

    if(marcaSelected === '' || anioSelected === '' || tipo === ''){
        console.log('Llena los espacios no sea imbecil')
    }else{
        console.log('Ta bien')
    }
}
/*
Es el mas comun de todos los distintos patrones de disenos que hay en javascript. Si se puede decir que hay uno que domina es este.

No tiene nada que ver con los modulos en javascript(para dividir pequenos frgamentos de codigo)
Es una manera de crear variables publicas y privadas en tus objetos.

En javascript hay manera de simular palabras reservadas de otros lenguajes de programacion para hacer privadas las variables.
*/

//A continuacion la forma mas comun de los patrones: los modules
//Una funcion con delimitacion de las variables para que no sean accedidas publicamente

//Ejemplo de un EFI
const comprarBoleto = (function(){

    //privado
    let evento = 'Conferencia Javascript'
    const adquirirBoleto = ()=>{
        const elemento = document.createElement('p');
        elemento.textContent = `Comprando boleto para ir a ${evento}`;
        document.querySelector('#app').appendChild(elemento);
    }

    //Todo lo que es publico requiere un return
    return{
        mostrarBoleto: function(){
            adquirirBoleto();
        },
        evento
    }
})();

console.log(comprarBoleto.evento);
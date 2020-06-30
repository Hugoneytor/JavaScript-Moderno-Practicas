//Primera Parte
// const esperando = new Promise(function(res,rej){
//     setTimeout(function(){
//         res('Se ejecuto');
//     }, 5000)
// });

// esperando.then(function(mensaje){
//     console.log(mensaje);
// });

//Segunda Parte

const aplicarDescuento = new Promise(function(res,rej){
    const descuento = false;

    if(descuento){
        res('Exito');
    }else{
        rej('Salio Mal');
    }
});

aplicarDescuento.then(function(mensaje){
    console.log(mensaje)
}).catch(function(mensaje){
    console.log(mensaje);
})

console.log(aplicarDescuento);
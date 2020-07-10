function reservacion(completo, {
    metodoPago = 'efectivo',
    cantidad = 0,
    dias = 0
}) {

    if (completo) {
        console.log(metodoPago, cantidad, dias, 'si')
    } else {
        console.log(metodoPago, cantidad, dias,'Abandonar');
    }

}

reservacion(false, {

});
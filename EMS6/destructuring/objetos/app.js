const cliente = {
    tipo: 'premium',
    nombre: "Hugo",
    datos: {
        ubicacion: {
            ciudad: 'jalisco',
            pais: 'Mexico'
        },
        cuenta: {
            desde: '10-02-2020',
            saldo: 4000
        }
    }
}

let {tipo,nombre, ubicacion:{ciudad}} = cliente;
console.log(tipo,nombre, ciudad);

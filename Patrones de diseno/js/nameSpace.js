// Es una forma de evitar colisiones con nombres en el scope global de
// javascript. Su idea es crear un scope global alrededor de toda tu aplicacion
// y agregar todas las funciones en el mismo lugar en vez de crear multiples
// funciones y objetos que se puedan acceder de forma global

const restaurarApp = {};
restaurarApp.platillos = [
    {
        platillo: 'pizza',
        precio: 25
    }, {
        platillo: 'Burguer',
        precio: 22
    }, {
        platillo: 'perrito',
        precio: 14
    }
];

//funciones
restaurarApp.funciones = {
    ordenar: id => {
        console.log(
            `Tu platillo ${restaurarApp.platillos[id].platillo} se esta preparando`
        )
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        }
        restaurarApp.platillos.push(nuevo);
    },
    mostrarMenu: platillos =>{
        console.log(`Bienvenido a nuestro menu`);
        platillos.forEach((platillo, index) =>{
            console.log(`${index}: ${platillo.platillo} $ ${platillo.precio}`)
        })
    }
}

const {platillos} = restaurarApp
restaurarApp.funciones.mostrarMenu(platillos);
restaurarApp.funciones.ordenar(2);

restaurarApp.funciones.agregarPlatillo('Pastel', 15);

restaurarApp.funciones.mostrarMenu(platillos)
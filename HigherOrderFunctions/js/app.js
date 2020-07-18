const autos = [
    {
        marca: 'BMW',
        modelo: 'Serie 3',
        year: 2012,
        precio: 30000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico'
    }, {
        marca: 'Audi',
        modelo: 'A4',
        year: 2018,
        precio: 40000,
        puertas: 4,
        color: 'Negro',
        transmision: 'automatico'
    }, {
        marca: 'Ford',
        modelo: 'Mustang',
        year: 2015,
        precio: 20000,
        puertas: 2,
        color: 'Blanco',
        transmision: 'automatico'
    }, {
        marca: 'Audi',
        modelo: 'A6',
        year: 2010,
        precio: 35000,
        puertas: 4,
        color: 'Negro',
        transmision: 'automatico'
    }, {
        marca: 'BMW',
        modelo: 'Serie 5',
        year: 2016,
        precio: 70000,
        puertas: 4,
        color: 'Rojo',
        transmision: 'automatico'
    }, {
        marca: 'Mercedes Benz',
        modelo: 'Clase C',
        year: 2015,
        precio: 25000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico'
    }, {
        marca: 'Chevrolet',
        modelo: 'Camaro',
        year: 2018,
        precio: 60000,
        puertas: 2,
        color: 'Rojo',
        transmision: 'manual'
    }, {
        marca: 'Ford',
        modelo: 'Mustang',
        year: 2019,
        precio: 80000,
        puertas: 2,
        color: 'Rojo',
        transmision: 'manual'
    }, {
        marca: 'Dodge',
        modelo: 'Challenger',
        year: 2017,
        precio: 40000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico'
    }, {
        marca: 'Audi',
        modelo: 'A3',
        year: 2017,
        precio: 55000,
        puertas: 2,
        color: 'Negro',
        transmision: 'manual'
    }, {
        marca: 'Dodge',
        modelo: 'Challenger',
        year: 2012,
        precio: 25000,
        puertas: 2,
        color: 'Rojo',
        transmision: 'manual'
    }, {
        marca: 'Mercedes Benz',
        modelo: 'Clase C',
        year: 2018,
        precio: 45000,
        puertas: 4,
        color: 'Azul',
        transmision: 'automatico'
    }, {
        marca: 'BMW',
        modelo: 'Serie 5',
        year: 2019,
        precio: 90000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico'
    }, {
        marca: 'Ford',
        modelo: 'Mustang',
        year: 2017,
        precio: 60000,
        puertas: 2,
        color: 'Negro',
        transmision: 'manual'
    }, {
        marca: 'Dodge',
        modelo: 'Challenger',
        year: 2015,
        precio: 35000,
        puertas: 2,
        color: 'Azul',
        transmision: 'automatico'
    }, {
        marca: 'BMW',
        modelo: 'Serie 3',
        year: 2018,
        precio: 50000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico'
    }, {
        marca: 'BMW',
        modelo: 'Serie 5',
        year: 2017,
        precio: 80000,
        puertas: 4,
        color: 'Negro',
        transmision: 'automatico'
    }, {
        marca: 'Mercedes Benz',
        modelo: 'Clase C',
        year: 2018,
        precio: 40000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico'
    }, {
        marca: 'Audi',
        modelo: 'A4',
        year: 2016,
        precio: 30000,
        puertas: 4,
        color: 'Azul',
        transmision: 'automatico'
    }
];

//for
/* 
for(let i = 0; i < autos.length; i++){
	console.log(autos[i]);
}
*/

// forEach 
// autos.forEach(auto=>{
// 	if(auto.color === 'Rojo'){
// 		console.log(auto);
// 	}
// });



//map
//La diferencia de map con forEach es que map te regresa un array nuevo
// let resultado = autos.map(auto=>{
// 	if(auto.marca === 'BMW'){
// 		return auto;
// 	}
// });


//filter 
//El filter crea el arreglo en una prueba evaluada
// let resultado = autos.filter(auto => auto.marca === 'BMW')

// let resultado = autos.filter(auto => auto.color === 'Rojo')
// console.log(resultado);


//find 
//La diferencia de filter y find es que find te va a retornar el primer elemento que encuentre en el arreglo
// let resultado = autos.find(auto=>auto.marca === 'BMW');
// console.log(resultado);

//reduce 
//toma todos los valores y retorna un valor unico
// let resultado = autos.reduce((total, auto)=>
// 	total + auto.precio, 0
// )
// console.log(resultado);

//some
//Tiene la caracteristica de que va a evaluar cierta condicion y unicamente retorna true o false
// let resultado = autos.some(auto => auto.marca === 'BMW');
// console.log(resultado)

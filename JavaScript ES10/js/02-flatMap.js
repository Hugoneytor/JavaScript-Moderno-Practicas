const productos = [
    { nombre: 'Producto 1', precio: 20},
    { nombre: 'Producto 2', precio: 30},
    { nombre: 'Producto 3', precio: 40}
];

console.log(productos);
const resultado = productos.flatMap(producto=>[producto.nombre, producto.precio]);

console.log(resultado);

// console.log(productos);
// const resultado = productos.map(producto=>[producto.nombre, producto.precio]);

// console.log(resultado.flat(1));
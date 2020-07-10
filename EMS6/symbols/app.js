// const simbolo = Symbol();
// const simbolo2 = Symbol('Descripcion aqui')

// console.log(simbolo, simbolo2);

let nombre = Symbol();
let apellido = Symbol();

let persona = {}
persona.nombre = 'hugo';
persona[nombre] = 'hugo';
console.log(persona);
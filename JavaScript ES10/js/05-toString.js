function sumar(a,b){
    //suma dos numero
    return a+b;
}

console.log(sumar.toString());


//Ejemplo
function AutoMovil(modelo,color){
    this.modelo = modelo;
    this.color = color;
}

AutoMovil.prototype.toString = function autoString(){
    const datos = `Auto: ${this.modelo} y color ${this.color}`
    return datos;
}

const auto = new AutoMovil('Camaro', 'Negro');

console.log(auto.toString());
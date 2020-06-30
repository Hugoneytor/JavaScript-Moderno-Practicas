function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}


Cliente.prototype.informacion = function(){
    return `El nombre del cliente es ${this.nombre}, su saldo es ${this.saldo}`;
}

const persona = new Cliente('Hugo', 300);
console.log( persona );

function Empresa(nombre,saldo,tel,tipo){
    Cliente.call(this,nombre,saldo);
    this.tipo = tipo;
    this.tel = tel;
}

Empresa.prototype = Object.create(Cliente.prototype);

const empresa = new Empresa('Hugo', 10, 3141630901, 'Empresa');
console.log( empresa.informacion() );

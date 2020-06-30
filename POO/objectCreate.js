const cliente = {
    imprimirSaldo: function() {
        return `Hola, tu saldo es ${this.saldo}, tu nombre es ${this.nombre}`
    },
    retirarSaldo: function(retiro){
        return this.saldo -= retiro;
    }
}

const mary = Object.create(cliente);
mary.nombre = "Mary";
mary.saldo = 300;

console.log(mary.imprimirSaldo());
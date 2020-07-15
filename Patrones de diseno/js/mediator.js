//Es un intermediario que se comunica con distintos tipos de objetos

//Define obejtos ya localizados para ya un objetivo muy especifico

const Vendedor = function(nombre){
    this.nombre = nombre;
    this.sala = null;
}

const Comprador = function(nombre){
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: function(articulo, precio){
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos en ${precio}`);
    },
    vendido: function(comprador){
        console.log(`Vendido a ${comprador.nombre}, (sonido de mazo)`);
    }
}

Comprador.prototype = {
    oferta : function(mensaje, comprador){
        console.log(`${comprador.nombre} : ${mensaje}`);
    }
}

const Subasta = function(){
    let compradores = {};

    return {
        registrar: function(usuario){
            compradores[usuario.nombre] = usuario;

            usuario.sala = compradores;
        },
        
    }
}

//instanciar las clases
const hugo = new Comprador('Hugo');
const juan = new Comprador('Juan');
const karen = new Comprador('Karen');

const vendedor = new Vendedor('vendedor');

const subasta = new Subasta();
subasta.registrar(juan);
subasta.registrar(hugo);
subasta.registrar(karen);

vendedor.oferta('Carro del año xd', 40000);

juan.oferta(4000, juan)
hugo.oferta(2000, hugo);
karen.oferta(20000, karen);

vendedor.vendido(karen)

console.log(hugo)
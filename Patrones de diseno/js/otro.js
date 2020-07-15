// También se le conoce como suscriptor 
 
let observer = {
    obtenerOfertas: function(callback) {
        if(typeof callback === "function") {
            this.subscribers[this.subscribers.length] = callback;
        }
    },
 
    cancelarOfertas: function(callback) {
        for(let i = 0; i < this.subscribers.length; i++) {
            if(this.subscribers[i] === callback) {
                delete this.subscribers[i];
            }
        }
    },
 
    publicarOfertas: function(oferta) {
        for (let i = 0; i < this.subscribers.length; i++) {
            if (typeof this.subscribers[i] === 'function' ) {
                this.subscribers[i](oferta);
            }
        }
    },
 
    crear: function(objeto) {
        for(let i in this) {
            if(this.hasOwnProperty(i)) {
                objeto[i] = this[i];
                objeto.subscribers = [];
            }
        }
    }
}
 
// Vendedores 
 
const udemy = {
    nuevoCurso:  function() {
        const curso = 'Un nuevo curso de JavaScript';
        this.publicarOfertas(curso);
    }
}
 
const facebook = {
    nuevoAnuncio: function() {
        const oferta = 'Compra un celular';
        this.publicarOfertas(oferta);
    }
}
 
const google = {
    nuevaHerramienta: function() {
        const herramienta = 'analizar datos';
        this.publicarOfertas(herramienta);
    }
}
 
// publicacodres 
 
observer.crear(udemy);
observer.crear(facebook);
observer.crear(google);
 
 
const juan = {
    compartir : function(oferta) {
        console.log('Juan dice:  Excelente oferta!' + oferta);
    }
}
 
const karen = {
    interesa: function(oferta) {
        console.log('Karen dice:  Me interesa la oferta de ' + oferta);
    }
}
 
const mariana = {
    promocion: function(oferta) {
        console.log('Mariana dice: Me interesa ' + oferta);
    }
}
 
udemy.obtenerOfertas( juan.compartir )
udemy.obtenerOfertas(karen.interesa)
udemy.obtenerOfertas(mariana.promocion)
udemy.nuevoCurso();
udemy.cancelarOfertas(karen.interesa)
udemy.nuevoCurso();
 
facebook.obtenerOfertas(karen.interesa);
facebook.nuevoAnuncio(); 
 
google.obtenerOfertas(mariana.promocion)
google.nuevaHerramienta();
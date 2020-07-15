/*Patrones para la creacion de onbjetos fueron los anteriores, excepto module.
Es mas un patron de comportamiento, se le conoce como observer o suscriptor publicador*/
let observer = {
    obtenerOfertas: function(callback){
        if(typeof callback === "function"){
            this.subscribers[this.subscribers.length] = callback;
        }
    },

    cancelarOfertas: function(callback){
        for(let i = 0; i< this.subscribers.length; i++){
            if(this.subscribers[i] === callback){
                delete this.subscribers[i];
            }
        }
    },
    publicarOferta: function(oferta){
        for(let i = 0; i< this.subscribers.length; i++){
            if(typeof this.subscribers[i] === 'function'){
                this.subscribers[i](oferta);
            }
        }
    },
    crear: function(objeto){
        for(let i in this){
            if(this.hasOwnProperty(i)){
                objeto[i] = this[i];
                objeto.subscribers = [];
            }
        }
    }
}   

//Vendedores
const udemy = {
    nuevoCurso: function(){
        const curso = 'Un nuevo curso de javascript';
        this.publicarOferta(curso);
    }
}

const facebook = {
    nuevoAnuncio: function(){
        const oferta = 'Compra un nuevo celular';
        this.publicarOferta(oferta);
    }
}

//Crear los publicadores
observer.crear(udemy);
observer.crear(facebook);

const hugo = {
    compartir: function(oferta){
        console.log('hugo dice: Excelente oferta ' + oferta)
    }
};

const karen = {
    interesa: function(oferta){
        console.log('Me interesa la oferta de ' + oferta)
    }
};

udemy.obtenerOfertas(hugo.compartir);
udemy.obtenerOfertas(karen.interesa);
udemy.nuevoCurso();


/* */
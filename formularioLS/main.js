class Pila{
    constructor(){
        this.pila = [];
    }

    push(element){
        this.pila.push(element);
        return this.pila;
    }

    pop(){
        return this.pila.pop()
    }

    peek(){
        return this.pila[this.pila.length - 1];
    }

}
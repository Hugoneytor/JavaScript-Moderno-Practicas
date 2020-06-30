//VARIABLES
const presupuestoUsuario = prompt('¿Cuanto es tu presupuesto semanal?: ');
const form = document.querySelector('#agregar-gasto');

let cantidadPresupuesto;

//CLASES

//clase de presupuesto
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = presupuesto;
        this.restante = presupuesto;
    }
    //restar del presupuesto actual
    presupuestoRestante(cantidad = 0){
        return this.restante -= Number(cantidad);
    }

}

//clase interfaz, maneja todo lo relacionado con html
class Interfaz{
    insertarPresupuesto(cantidad){
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }

    imprimirMensaje(mensaje,tipo){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success')
        }
        divMensaje.appendChild(document.createTextNode(mensaje));

        //Insertar en el DOM
        document.querySelector('.primario').insertBefore(divMensaje, form);

        //Quitar el alert despues de 3 segundos
        setTimeout(function(){
            document.querySelector('div .primario .alert').remove();
            form.reset();
        },3000);
    }

    //Inserta los gastos a la lista
    agregarGastoListado(nombre,cantidad){
        const gastoListado = document.querySelector('#gastos ul');

        //Crear un li
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        //Insertar gasto
        li.innerHTML = `
        ${nombre}
        <span class='badge badge-primary badge-pill'>$ ${cantidad} </span>`;

        gastoListado.appendChild(li);
    }

    //comprobar resultado restante
    presupuestoRestante(cantidad){
        const restante = document.querySelector('span#restante');
        const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad)
    
        restante.innerHTML = presupuestoRestanteUsuario;

        this.comprobarPresupuesto();
    }

    //Cambia de color el presupuesto restante
    comprobarPresupuesto(){
        const presupuestoTotal = cantidadPresupuesto.presupuesto;
        const presupuestoRestante = cantidadPresupuesto.restante;

        //comprobar el 25% del gasto
        if((presupuestoTotal/4) > presupuestoRestante){
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success', 'alert-warnig');
            restante.classList.add('alert-danger');

        }else if((presupuestoTotal/2) > presupuestoRestante){
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success');
            restante.classList.add('alert-warning');
        }
    }
}

//EVENT LISTENERS
document.addEventListener('DOMContentLoaded', ()=>{
    if(isNaN(presupuestoUsuario) || presupuestoUsuario === null || presupuestoUsuario === ''){
        location.reload();
    }else{
        cantidadPresupuesto = new Presupuesto(Number(presupuestoUsuario));

        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
});

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    //Leer el formulario de gasto
    const nombreGasto = document.querySelector('#gasto').value;
    const cantidadGasto = document.querySelector('#cantidad').value;

    //Instanciamos la interfaz
    const ui = new Interfaz();

    //Comprobar que no este vacio
    if(nombreGasto === '' && cantidadGasto === ''){
        //Dos parametros: Mensaje y tipo
        ui.imprimirMensaje('Hubo un error', 'error');
    }else{
        //Insertar en el HTML
        ui.imprimirMensaje('Correcto', 'correcto');
        ui.agregarGastoListado(nombreGasto,cantidadGasto);
        ui.presupuestoRestante(cantidadGasto);
    }


});
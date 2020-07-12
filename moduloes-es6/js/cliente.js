//Exportar variables
export const nombre = 'Hugo';
export const ahorro = 3000;

//Exportar funciones
export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre}, ahorro: ${ahorro}`
}

//exportar clases
export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInfo() {
        return `Cliente: ${this.nombre}, ahorro: ${this.ahorro}`
    }

}
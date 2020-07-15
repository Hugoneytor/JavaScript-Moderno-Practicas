//Define la creacion de un objeto que solo tiene una instancia, En su forma mas sencilla puede ser ub object literal. Ese objeto tiene ya una instancia o tambien puede encapsular funcionamiento mas avanzado o relacionado

//Esta instancia tendra todas las funciones dentro
const alumnos = {
    //todos los alumnos
    listaAlumnos: [],

//obtener un alumno
    get:function(id){
        return this.listaAlumnos[id];
    },

    //crear un alumno
    crear: function(datos){
        this.listaAlumnos.push(datos);
    },

    //listar todos los alumnos
    listado: function(){
        return this.listaAlumnos;
    }
};

const infoAlumno = {
    nombre: 'Juan',
    edad: '20',
}

const infoAlumno2 = {
    nombre: 'Hugo',
    edad: 21
};

alumnos.crear(infoAlumno)
alumnos.crear(infoAlumno2)

const listado = alumnos.listado();

console.log(listado);

const alumno = alumnos.get(1);

console.log(alumno);
class Persona {
    constructor(nombre, direccion, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.direccion = direccion;
    }

    trabajar(Hospital) {
        console.log(`${this.nombre} trabaja en ${Hospital.nombre}`);
    }
}

module.exports = Persona;
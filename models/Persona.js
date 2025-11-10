class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    trabajar(Hospital) {
        console.log(`${this.nombre} trabaja en ${Hospital.nombre}`);
    }
}

module.exports = Persona;
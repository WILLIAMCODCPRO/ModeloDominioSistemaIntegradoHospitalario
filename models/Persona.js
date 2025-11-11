class Persona {
    constructor(nombre, direccion, apellidos, segundoNombre) {
        this.nombre = nombre;
        this.segundoNombre = segundoNombre;
        this.apellidos = apellidos;
        this.direccion = direccion;
    }

    get nombreCompleto() {
        return `${this.nombre} ${this.segundoNombre} ${this.apellidos}`;
    }
}

module.exports = Persona;
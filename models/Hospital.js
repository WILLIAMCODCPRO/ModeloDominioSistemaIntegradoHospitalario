class Hospital {
    constructor(nombre) {
        this.nombre = nombre;
        
    }

    emplear(persona) {
        console.log(`${this.nombre} empleo a ${persona.nombre}`);
    }
}

module.exports = Hospital;
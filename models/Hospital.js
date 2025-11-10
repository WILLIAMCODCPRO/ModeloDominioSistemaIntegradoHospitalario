class Hospital {
    constructor(nombre) {
        this.nombre = nombre;
    }

    emplear(){
        console.log(`${this.nombre} empleo a `);
    }
}

module.exports = Hospital;
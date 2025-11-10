const Hospital = require("./models/Hospital");
const Persona = require("./models/Persona");

let hospital1 = new Hospital("Hospital Diosito");
let persona1 = new Persona("William");

hospital1.emplear(persona1);
persona1.trabajar(hospital1);
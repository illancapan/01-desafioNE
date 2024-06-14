const { registrar, leer } = require('./operaciones.js');

const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2);

if (operacion === 'registrar') {
    registrar(nombre, edad, animal, color, enfermedad);
    console.log("Cita registrada exitosamente.");
} else if (operacion === 'leer') {
    leer();
} else {
    console.log('Error. Usa "registrar" para añadir una nueva cita o "leer" para leer las citas.');
}

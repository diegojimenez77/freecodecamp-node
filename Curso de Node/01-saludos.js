function saludar(nombre){
    return `Hola, ${nombre}`;
}

function saludarHolaMundo() {
    return 'Hola, Mundo!'
}

// Forma simple de exportar
// module.exports.saludar = saludar;
// module.exports.saludarHolaMundo = saludarHolaMundo;

// Exportar usando un objeto.
module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
};
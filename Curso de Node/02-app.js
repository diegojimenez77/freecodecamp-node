// Importacion simple
// const saludos = require('./saludos.js');
// console.log(saludos.saludar("Juan"));
// console.log(saludos.saludarHolaMundo());

// Desestructuracion
const { saludar, saludarHolaMundo } = require('./01-saludos.js');
console.log(saludar("FreeCodeCamp"));
console.log(saludarHolaMundo());
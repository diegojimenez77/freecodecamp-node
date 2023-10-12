// const EventEmitter = require('events')
// console.log(EventEmitter); // imprime los events emiters que tiene node

//////////////////////////////////
const EventEmitter = require('events');
const emisorProductos = new EventEmitter(); // con la palabra new se crea una nueva instancia
const emisorProductos2 = new EventEmitter(); 

emisorProductos.on('compra', (total) => {
    console.log(`Se realizo una compra por $${total}.`);
});

emisorProductos.emit('compra', 500);

// otro ejemplo 
emisorProductos2.on('compra', (total, numProductos) => {
    console.log(`Total de la compra: $${total}.`);
    console.log(`Numero de productos: ${numProductos}.`);
});

emisorProductos2.emit('compra', 500, 3);
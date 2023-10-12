function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

mostrarTema('Node.js'); // sin retraso
setTimeout(mostrarTema, 1000, 'Node.js'); // con retraso en milisegundos.

// otro ejemplo con dos argumentos
function sumar(a,b) {
    console.log(a + b);
}

setTimeout(sumar, 2000, 5, 6); // aparece 11 despues de 2000 milisegundos.


// setImmediate
function mostrarTema2(tema2) {
    console.log(`Estoy en mi curso de ${tema2}`);
}

console.log('Antes de setImmediat()');

setImmediate(mostrarTema2, 'Node.js');// se ejecuta despues de los 2 console.log codigo sincrono

console.log('Despues de setImmediat()');

// setInterval
function mostrarTema3(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}

setInterval(mostrarTema3, 1500, 'Node.js'); //Imprime Estoy aprendiendo Node.js un numero infinito de veces cada 1500 milisegundos.

function sumar(a, b){
    console.log(a + b);
}

setInterval(sumar, 1500, 3, 4);
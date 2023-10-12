console.log(process);

console.log(process.env);

// podemos acceder a los argumentos del programa con el modulo process.

console.log(process.argv[2]);
console.log(process.argv[3]);
// [node, app.js, 6, 7]
//   0       1    2  3

for(let i = 2; i< process.argv.length; i++){
    console.log(process.argv[i]);
} // imprime todos los valores de los argumentos a partir del segundo

console.log(process.memoryUsage());

// pritns 
// {
//     rss: 41766912,
//     heapTotal: 6475776,
//     heapUsed: 5751040,
//     external: 427424,
//     arrayBuffers: 17678
//   }
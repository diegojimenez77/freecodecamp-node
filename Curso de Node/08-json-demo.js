// const curso = require('./08-curso.json');

// console.log(curso);// imprime la info del archivo 08-curso.json 
// console.log(typeof curso);
// console.log(curso.titulo);
// console.log(curso.numVistas);
// console.log(curso.temas);
// console.log(curso.esPublico);

let infoCurso = {
    "titulo":"Aprende Node.js",
    "numVistas": 45642,
    "temas":[
        "JavaScript",
        "Node.js"
    ],
    "esPublico": true
}

console.log(infoCurso);
console.log(typeof infoCurso);// object

// llevando el formato JSON a una cadena de caracteres
let infoCursoJSON = JSON.stringify(infoCurso);
console.log(infoCursoJSON); // {"titulo":"Aprende Node.js","numVistas":45642,"temas":["JavaScript","Node.js"],"esPublico":true}
console.log(typeof infoCursoJSON); // string
console.log(infoCursoJSON.titulo); // undefined dado a que esta en formato string.

// llevar un string a un objeto formato JSON.
let infoCursoObjeto = JSON.parse(infoCursoJSON);
console.log(infoCursoObjeto); // imprime el objeto en formato JSON
console.log(infoCursoObjeto.titulo);  // Aprende Node.js

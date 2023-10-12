const http = require('http');

const servidor = http.createServer((req, res) => {
    // Proceso
    console.log('Solicitud nueva')
    res.end('Hola, mundo');// significa finalizar, nos permite enviar respuesta al cliente
}); // Significa crear servidor, se ejecuta cada vez que se hace una solicitud al servidor.

const PORT = 3000;

servidor.listen(PORT, () => {
    console.log(`El servidor esta escuchando en http://localhost:${PORT}...`);
});
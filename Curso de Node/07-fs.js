// leer archivos
const fs = require('fs');

fs.readFile('07-index.html', 'utf-8', (err, contenido)=>{
 if(err){
  console.log(err);// muestra el error pero no detiene la ejecucion.
  // throw err; // es lo mismo que console.log(err) pero detiene la ejecucion.
 } else{
  console.log(contenido);
 }
 console.log('Mensaje...');// no se muestra si se detiene la ejecucion.
}); // nos imprime el contenido del archivo html
// si no encuentra el archivo imprime un error.



// como cambiar el nombre de un archivo
const fs = require('fs');

fs.rename('07-index.html','main.html',(err)=>{
  if(err){
    throw err;
  }
  console.log('Nombre cambiado exitosamente');
});



// Agregar contenido al final de un archivo
const fs = require('fs');
fs.appendFile('07-index.html', '<p>Hola</p>', (err)=>{
  if(err) {
    throw err;
  }
  console.log('Archivo actualizado')
});



//Remplazar todo el contenido de un archivo.
const fs = require('fs');

fs.writeFile('07-index.html', 'Contenido nuevo', (err) =>{
  if(err) {
    throw err;
  }
  console.log('Contenido reemplazado exitosamente.');
});



//Eliminar un archivo, hay que tener mucho cuidado porque elimina definitivamente
const fs = require('fs');

fs.unlink('07-index2.html', (err)=>{
  if(err) {
    throw err;
  }
  console.log('Archivo eliminado...')
})

// IMPORTANTE: recordar que los procesos asincronos se ejecutan al terminar la 
// ejecucion del los procesos sincronos.
// si queremos que funcionen de forma sincrona tenemos que agregar el termino Sync al final 

const fs = require('fs');

fs.writeFileSync('07-index.html', 'Contenido nuevo', (err) =>{
  if(err) {
    throw err;
  }
  console.log('Contenido reemplazado exitosamente.');
});

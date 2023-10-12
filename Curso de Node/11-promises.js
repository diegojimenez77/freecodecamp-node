const estatusPedido = () => {
 return Math.random() < 0.8;
}

const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(estatusPedido()){
      resolve('Pedido exitoso! Su pizza esta en camino.');
    } else {
      reject('Ocurrio un error. Por favor intente nuevamente')
    }
  }, 3000);
});

const manejarPedido = (mensajeDeConfirmacion) => {
  console.log(mensajeDeConfirmacion);
};

const rechazarPedido = (mensajeDeError) => {
 console.log(mensajeDeError);
};

miPedidoDePizza.then(manejarPedido, rechazarPedido);

// sintaxis alternativa para la seccion de las funciones menejarPedido y rechazarPedido, todo se puede combinar en un solo bloque de codigo

miPedidoDePizza
  .then((mensajeDeConfirmacion) =>{
    console.log(mensajeDeConfirmacion);
  })
  .then((null, (mensajeDeError) => {
    console.log(mensajeDeError);
  })); // cuando no usamos .catch, el mensaje de error no se muestra claramente en la consola se muestra con mucho texto.

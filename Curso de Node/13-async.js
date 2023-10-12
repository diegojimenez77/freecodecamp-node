function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
      console.log(`Ordenando: ${producto} de freeCodeCamp.`);
      setTimeout(() => {
        if (producto === 'taza') {
          resolve(`Ordenando una taza con el logo de freeCodeCamp...`);
        } else if (producto === 'playera') {
          resolve(`Ordenando una playera con el logo de freeCodeCamp...`);
        } else if (producto === 'gorra') {
          resolve(`Ordenando una gorra con el logo de freeCodeCamp...`);
        } else {
          reject('Este producto no esta disponible actualmente.');
        }
      }, 2000);
    });
}

function procesarPedido(pedido) {
  return new Promise(resolve => {// no necesariamente se tienen que definir los dos parametros si no se usa el reject, no usamos el reject porque esta funcion solo se activa si se ordena el producto correcto.
    console.log('Procesando pedido...');
    console.log(`El pedido fue: "${pedido}"`);
    setTimeout(() => {
      resolve('Gracias por tu compra. Disfruta tu producto de freeCodeCamp.');
    }, 4000)
  })
}

// ordenarProducto('taza')
//   .then(pedido => {
//     console.log('Respuesta recibida');
//     console.log(pedido);
//     return procesarPedido(pedido);
//   })
//   .then(pedidoProcesado => {
//     console.log(pedidoProcesado);
//   })
//   .catch(error => {
//     console.log(error);
//   })

  // para la ultima parte del codigo tenemos async await
async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
    console.log('Respuesta recibida');
    const respuestaProcesada = await procesarPedido(respuesta); // si no colocamos el await procesarPedido se queda como pendiente.
    console.log(respuestaProcesada);
  } catch (error) {
    console.log(error);
  }
}

realizarPedido('playera');

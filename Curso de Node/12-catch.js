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
   
   miPedidoDePizza
     .then((mensajeDeConfirmacion) =>{
       console.log(mensajeDeConfirmacion);
     })
     .catch((mensajeDeError) => {
       console.log(mensajeDeError);
     });// con el catch se imprime correctamente el error. Ocurrio un error. Por favor intent nuevamente.
   

     // hay otra alternativa de sintaxis, se usa cuando la logica de las funciones es mas extensa.
     const manejarPedido = (mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
     };

     const manejarRechazo = (mensajeDeError) => {
        console.log(mensajeDeError);
     };

     miPedidoDePizza
     .then(manejarPedido)
     .catch(manejarRechazo);


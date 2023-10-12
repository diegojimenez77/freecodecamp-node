## Node js

Es un entorno de ejecucion de JavaScript orientado a eventos asincronos.

Entorno de Ejecucion: infraestructura en la cual se ejecuta un programa o aplicacion.

Anteriormente solo podiamos ejecutar JavaScript solo en el browser, gracias a node ahora podemos ejecutarlo en la linea de comandos.

Desarrollo backend servidores se hace con node.

Node.js es un Entorno de ejecucion de JavaScript orientado a eventos asincronos.

Evento asincrono: Es un evento que se ejecuta idependientemente del proceso principal de la aplicacion.
Por ejemplo: obtener informacion de una base de datos.

Evento sincrono: Evento que se ejecuta como parte del proceso principal de laaplicacion.

Node.js = Entorno de ejecucion de JavaScript orientado aevenos asincronos.

--

# Caracteristicas:

- Open-source (codigo abierto).
- Multiplataforma.
- Basado en el motor V8 de Google.

Motor V8: Motor de JavaScript desarrollado por el Chromium Project para Google Chrome.

Motor de JavaScript: es un Software que ejecuta codigo de JavaScript.

--

# Conceptos importantes:

Arquitectura cliente-servidor
Modelo en el cual el servidor envia recursos al dispositivo que los solicita (cliente).

Desarrollo front-end: Area del desarollo web que se encarga del desarrollo de los componentes que ve el usuario y con los cuales interactua.

Desarrollo back-end: Area del desarrollo web que se encarga del desarollo de los servidores. "lo que el usuario no ve"

Node se usa para el desarrollo back-en y full-stack.

Protocolo: Reglas que permiten que dos entidades de una red se comuniquen. Protocolo = reglas para comunicarse.

La informacion se envia en formatos especificos del navegador al servidor y biceversa.

Protocolos HTTP y HTTPS

--

# Base de Datos: Conjunto de datos estructurados sobre un mismo contexto que se pueden consultar.

Con Node desarrollaremos los servidores que procesaran las solicitudes del navegador.

--

# Paginas web Estaticas y Dinamicas

Estaticas: una vez descargadas con todos sus recursos, ya no necesitan ningun tipo de interaccion con el usuario, por ejemplo un blog.
Dinamicas: tienen interaccion con el usuario y hace varias solicitudes al servidor.

Conceptos:

- Arquitectura Cliente-servidor.
- Desarrollo front-end y back-end
- Protocolo
- Base de datos
- Paginas web estaticas y dinamicas.

# Node.js es usado para:

- Desarrollo back-end
- Desarrollo de APIs

# API - Application Programming Interface

Interfaz de programacion de aplicaciones, intermediario entre distintos progrmas. el mesero.

Nos permite conectar la aplicacion con el servidor.

# Ventajas de usar Node

Node nos permite desarrollar aplicaciones escalables y de tiempo real.

Escalabe: Su rendimiento se puede adaptar a medida que crece el uso de la aplicacion y recibe mas solicitudes.

Aplicacion de tiempo real: Establece una conexion bidireccional y dinamica entre el servidor y el cliente.
Analiza los eventos que ocurren y reacciona de forma casi inmediata.

--

# Que NO es Node:

- No es un lenguaje de programacion
- No es un framework
- No es una libreria.

# Node es:

- Un entorno de ejecucion.

---

Descargar e instalar Node.
https://nodejs.org

Version LTS - es la mas probada.

## Add to path = nos permite ejecutar node en la linea de comandos

Verificar la version de node
comando = node -v

---

# REPL de Node

Read, Eval, Print, Loop
Es el ciclo de leer, evaluar y mostrar directamente en la linea de comandos.

---

# Modulo

Funcionalidad oganizada en uno o varios archivos JavaScript que puede ser reutilizada en una aplicacion.

Los modulos son bloques de codigo que se pueden comunicar unos con otros por medio de la importacion y exportacio.

# Ventajas:

- Evitamos repetir el codigo
- Reutilizamos el codigo
- Es mas facil encontrar y corregir bugs
- Es mas facil modificar el codigo
- Es mas facil agregar nueva funcionalidad.

--

# Importar y exportar modulos:

Importar( un modulo )
Darle acceso a funciones y elementos definidos en otro modulo.

Para importar un elemento a un modulo debemos exportarlo desde otro modulo.

exportar = module.exports.saludar= saludar;
importar = const saludo = require("./saludo.js");
console.log(saludo.saludar("freeCodeCamp"));
--

# Sintaxis de desestructuracion y require()

La desestructuracion es tomar elementos independientes del modulo que se esta esportando, en este caso no impoortamos el modulo saludos completo, sino que importamos funcion por funcion, podemos usar independientemente cada funcion.

const { saludar, saludarHolaMundo } = require('./saludos.js');
console.log(saludar("FreeCodeCamp"));
console.log(saludarHolaMundo());

--

# Modulos built-in

Son los modulos que vienen instalados en Node.
Son modulos que podemos usar directamente al trabajar con Node.js (sin instalarlos).

-http
-https
-fs(file system)
-os(operating system)
-path

--

# Modulo Console

Modulo built-in que implementa funcionalidad similar a la consola de un navegador web.
Nos permite ejecutar el codigo JS y mostrar resultados.

Metodos utiles

- console.log()
- console.warn()
- console.error()
- console.assert()
- console.table()

--

# Modulo process 04-process.js

- Provee informacion sobre el proceso de Node que se esta ejecutando.
- Tambien puede tener cierto control sobre el proceso.

--

# Modulo OS 05-os.js

Contiene funcionalidad para obtener informacion sobre el sistema operativo en el cual se ejecuta la aplicacion.

- Este modulo requiere importarse
  consot os = require('os');

--

# Modulo Timers 06-timers.js

Timer o temporizador, contiene funciones que ejecutan codigo luego de un cierto periodo de timepo.
Procesos asyncronos

- setTimeout()
- setImmediate()
- setInterval()

setTimeout() - Ejecuta codigo luego de un numero especifico de milisegundos. 1 segundo - 1000 milisegundos.

setTimeout(funcion, retraso, argumento);
setTimeout(funcion, retraso, argumento1, argumento2);

Higer-Order-Programming, nos permite tratar a las funciones como algo que podemos pasar como argumentos.

//
setImmediate() - Ejecuta codigo asincrono en la proxima iteracion del ciclo de eventos ( lo mas pronto posible).

setImmediate(funcion, argumento1, argumento2);

--SE EJECUTA DESPUES DEL CODIGO SINCRONO--
-Se ejecuta los mas pronto posible de forma asincrona, despues del codigo sincrono-

//
setInterval() - Ejecuta codigo un numero infinito de veces con un retraso especifico de milisegundos

setInterval(funcion, intervalo, arg1, arg2);

--
1:39:54 en el video

# Modulo File Sistem fs - sistema de archivos

Contiene funcionalidad muy util para trabajar con el sistema de archivos.

Operaciones utiles con archivos:

- Leer
- Modificar
- Copiar
- Eliminar
- Cambiar nombre

Todos los metodos de este modulos son asincronos por defecto.
--No bloquean la ejecucion del programa.--

Pero puedes escoger versiones sincronas de estos metodos agregando Sync a sus nombres.

--
2:10:49

# npm y Node.js

npm = Es el archivo de software mas grande del mundo que contiene paquetes que puedes instalar y usar con Node.js
Tambien es una herramienta para la linea de comandos.

Paquete = Archivo o directorio descrito por un archivo package.json.

Modoulo = Cualquier archivo o directorio en el direcrorio nod_modules que puede ser inprotado con require().

Para poder incluir un modulo con require(), debe ser...Un archivo JavaScript .js o una
carpeta con un archivo package.json que contiene una propiedad "main".

node_modules se crea automaticamiente cuando tragbajamos con npm.

Solo los modulos que tienen un archivo package.json son paquetes.

Dependencia: Paquete que otro paquete necesita para funcionar correctamente.

Crear un paquere de Node

1. Crear una carpete
2. en la teminal usar el comando npm init
3. aparece un cuestionario para llenar los detalles del paquete.
4. al terminar el cuestionario ya tenemos un archivo package.json creado.

Si quisieramos generar un archivo con todos los valores por defecto es con el comando
npm init --yes
con todos los valores por defecto.

# Que es .json = esta basado en la sintaxis de Javascript

Introduccion a JSON, es un formato usado para almacenar configuracion
JSON = JavaScript Object Notation

Es un formato de texto usado para almacenar y transportar informacion.
JSON esta basado en la notacion de objetos de javaScript pero es solo texto.
Nos permite almacenar objetos de JavaScript como texto.
Es idependiente del lenguaje de programacion con el cual estamos trabajando.

Cuando enviamos informacion del cliente al servidor y del serviodor al cliente
la infomacion viaja en formato JSON.

Caraceristicas

- Los datos se representan como pares clave-valor( propiedades ).
  {
  "titulo": "Aprende Node.js",
  "numVistas": 45642,
  "numLikes": 21123,
  "temas": [
  "JavaScript",
  "Node.js"
  ],
  "esPublico":true
  }
  tambien puede ser un arreglo JSON con []

  Los pares deben estar separados por una comma ,

  Pude contener:

  - Cadenas de caracteres
  - Numeros
  - Arreglos
  - Valores Booleanos
  - Objetos

  Podemos convertir del formato JSON a un objeto JavaScript
  JSON.parse()

  Tambien podemos convertir de formato JavaScript a formato JSON con
  JSON.stringify()

  Transmitir la informacion como string es la mejor forma de enviar informacion.

  --
  2:43:19

  # Instalar y desinstalar paquetes con NPM

  Como instalar Express
  npm install express

  Como desinstallar paquetes
  npm unistall express

  Si necesitamos instalar una version especifica de un paquete
  npm install express@4.15.1

  Dev dependencies
  npm install express --save-dev
  Guardar como una dependencia para el desarrollo de la aplicacion.
  Aparece como devdependency en el package.json.

--

# Package-lock.json

Se genera automaticamente cuando npm modifica el arbol de node_modules o package.json.
Describe el arbol generado para que futuras instalaiones puedan generar exactamente el mismo arbol.

name = Es el nombre del paquete. Es el mismo nombre que incluimos en package.json
version = La version del paquete. Es la misma version que incluimos en package.json.
lockfileVersion = La version del archivo package-lock.json.
packages = es un objeto que asocia la ubicacion de cada paquete con un objeto que contiene informacion sobre ese paquete.

--

# Evenos en node.js

Evento asincrono: un evento asincrono se ejecuta en paralelo sin bloquear la aplicacion normal
Evento sincorno: espera a que se complete la cadena de procesos, se bloquea

Evento: Es una accion que se realiza en la aplicacion y desencadena un proceso.

Tambien podemos definir eventos que se desencadenadn y ejecutan internamente en el servidor.

Node esta basado en eventos asincronos.

Emitters (emisores) = Objetos que emiten eventos nombrados y llaman a funciones especificas cuando ocurren.

Los emisores son instancias de la clase EventEmitter.

Tienen un metodo .on() para asociar una funcion al evento.

Esa funcion se ejecuta cuando ocurre el evento.

Y se demonina "Event Handler" (maneja el evento). tambien Event listener.

Modulo events = Definir, emitir y escuchar eventos.

Event Handlers = Funciones que estan a la espera de que ocurra un evento, estan asociadas a dicho evento y cuando ocurre el evento se ejecutan.

--
3:19

# Promesas en JavaScript

JavaScript Asyncrono = Concepto de una promesa

Promesa = Es un objeto que representa el eventual resulado (o error) de una operacion asincrona.

Promise = Promesa
Promesa se crea e inicia en el estado pendiente
Pasa a ser cumplida o rechazada = fulfilled o rejected

Una promesa es un objeto de JavaScript
Ese objeto se asocioa a una callback function.

Callback function = Funcion callback o funcion de respuesta.

Funcion callback = funcion que se pasa a otra funcion como argumento y luego se ejecuta dentro de la funcion externa.

Las promesas tienen un metodo .then(), con el cual podemos decidir que ocurre cuando se completa la promesa (exito o error)

## 3:31.19 - Ejemplo de promesas pizza.

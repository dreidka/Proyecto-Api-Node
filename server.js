const http = require('http');
const express = require('express');
const productos = require('./rutas/productos');
//Se llama de la carpeta "rutas" el js llamado productos
const app = express();
app.use(express.json());
app.use('/productos',productos); 
//Productos sera donde se quieren encontrar los productos de la tienda o interfaz que se quiere realizar
app.use('/', function(req, res) {
    res.send('EstÃ¡ funcionando');
    //En caso de ser ejecutado correctamente la aplicacion respondera un mensaje
});
const server = http.createServer(app);
const port = 3000;
server.listen(port);
//En caso de que el puerto este habilitado para ejecutar la aplicacion retornara en la consola el siguiente mensaje
console.debug('AplicaciÃ³n funcionando en ' + port);
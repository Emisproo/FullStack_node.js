const express = require('express'); //complementos requeridos
const path = require('path'); // " 
const app = express(); //nuestra app

const server = require('http').Server(app); //conexion al servidor
const socketio = require('socket.io')(server); //agregar socket para la multiconexion


app.set('port', process.env.PORT || 3000); //puerto predeterminado

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public'))); //busca el html

//ejecuta la conexion al socket con la funtion module.exports =(io) de socket.js
require('./socket')(socketio); 

/*server.listen(3050, ()=> {
    console.log('Servidor en el puerto 3050');
}) //determinacion del puerto no predeterminado */

server.listen(app.get('port'), ()=> {
    console.log('Servers port ', app.get('port'));
}) //utilizo el puerto predeterminado 



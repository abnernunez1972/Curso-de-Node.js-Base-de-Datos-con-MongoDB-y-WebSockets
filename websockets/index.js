const express = require('express');

const app = express();
const server = require('http').Server(app);

const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('conecction',function(socket){
    console.log('Nuevo cliente conectado');
    socket.emit('Nuevo mensaje bienvenido');
})

setInterval( () => {
    io.emit('mensaje', 'Hola, les estoy saludando a todos');
}, 3000)

server.listen(8000, function() {
    console.log('Servidor iniciado en http://localhost:8000');
})
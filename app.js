const http = require('http');
const express = require('express');
const app = express();
const io = require('socket.io');

const server = http.createServer(app);
app.set('port', 3000);
app.use(express.static(__dirname + "/public"));

server.listen(app.get('port'), function () {
    console.log('servidor iniciado');
})

var sockets = io.listen(server);
sockets.on('connection',function (socket) {
    console.log('nuevo cliente conectado');
    socket.on('mensaje-del-cliente',function (data) {
        sockets.emit('mensaje-del-servidor',data);
    });    
});
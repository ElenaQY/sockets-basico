var socket = io();

//Escuchar acciones
socket.on('connect', function() {
    console.log('conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Conexión al servidor perdida');
});
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo!'
}, function(resp) {
    console.log('respuesta del servidor: ', resp);
});
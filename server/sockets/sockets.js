const { io } = require('../server');
io.on('connection', (cliente) => {

    console.log(`Usuario conectado`);

    //Enviar info al cliente
    cliente.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a la app'
    });

    cliente.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    //Escuchar cliente
    cliente.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //Se le envia a todos los usuarios conectados al servidor
        cliente.broadcast.emit('enviarMensaje', data);

        // if (data.usuario) {
        //     callback({
        //         resp: 'Todo salió bien!'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salió mal!'
        //     });
        // }
    });
});
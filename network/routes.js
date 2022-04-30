const express = require('express');

// Aqui se listan las rutas de los Componentes que usara la apps
const message = require('../components/messages/network');
const user = require('../components/user/network');
const chat = require('../components/chat/network');
//

// Aqui se agrgan las rutas al server de express 
const routes = function (server) {  
    server.use('/message', message);
    server.use('/user', user);
    server.use('/chat', chat);
}
//

module.exports = routes;
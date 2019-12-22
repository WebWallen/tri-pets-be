const express = require('express');
const helmet = require('helmet');

// Place required routers here

const PetsRouter = require('./pets/pets-router');

const server = express();

server.use(express.json());
server.use(helmet());

// Attach .use to required routes here

server.use('/api/pets', PetsRouter);

module.exports = server;
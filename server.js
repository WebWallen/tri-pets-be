const express = require('express');
const helmet = require('helmet');

// Place required routers here

const server = express();

server.use(express.json());
server.use(helmet());
// Attach .use to required routes here

module.exports = server;
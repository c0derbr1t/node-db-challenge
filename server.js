const express = require('express');

const ProjectRouter = require('./projects/project-router.js');
const ResourceRouter = require('./projects/resource-router.js');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);

module.exports = server;
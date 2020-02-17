const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = require('./app'); 
require('./models/db');


const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port);

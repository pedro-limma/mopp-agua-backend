const express = require('express');
const http = require('http');
const PORT = 3333;
const routes = require('./routes');
const cors = require('cors');
const socketIO = require('socket.io');

const app = express();

const server = http.createServer(app);


app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333);
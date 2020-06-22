const express = require('express');
const http = require('http');
const PORT = 3333;
const routes = require('./routes');
const cors = require('cors');
const socketIO = require('socket.io');

const app = express();

const server = http.createServer(app);

const io = socketIO(server);

io.on('connection', socket => {
  console.log('New user connected');

  socket.on('disconnect', () =>{
    console.log('User disconnected')
  })
})

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333);
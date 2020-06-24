const express = require('express');
const http = require('http');
const PORT = 3333;
const socketIO = require('socket.io');
const routes = require('./routes');
const cors = require('cors');
const Readline = require('@serialport/parser-readline');
const SerialPort = require('serialport');

const connection = require('./database/connection');


const app = express();

const server = http.createServer(app);


app.use(cors());

const port = new SerialPort('COM6', {
  boudRate: 9600
});

const parser = new Readline({delimiter: '\r\n'});

port.pipe(parser)

port.on('open', () => {
  console.log('Porta aberta');

  parser.on('data',async (data)=>{
    console.log(data);
    await connection('medicao').insert({
      media:data
    });
  });
});

app.use(express.json());
app.use(routes);

app.listen(3333);

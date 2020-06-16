const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

const port = new SerialPort('COM6', {
  boudRate: 9600
});

const parser = new Readline({delimiter: '\r\n'});

port.pipe(parser)


port.on('open', () => {
  console.log('Porta aberta');

  parser.on('data',(data)=>{
    console.log(data);
  });
});

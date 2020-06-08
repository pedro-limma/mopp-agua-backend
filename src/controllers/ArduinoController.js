const SerialPort = require('serialport');
const port = new SerialPort('ECOM6', {
  boudRate: 9600
});

port.on('open', () => {
  console.log('Porta aberta');
});

port.on('data',(data)=>{
  console.log(data);
});
const connection = require('../database/connection');
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

const port = new SerialPort('COM6', {
  boudRate: 9600
});

const parser = new Readline({delimiter: '\r\n'});

port.pipe(parser)

module.exports = {
  async create(request,response){
    port.on('open',()=>{
      console.log('Porta serial aberta');
      port.on('data', async (data) =>{
        console.log(data);
        await connection('medicao').insert({
          media: data
        });
      });
    });
  }
}
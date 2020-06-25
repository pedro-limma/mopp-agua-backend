const connection = require('../database/connection');

module.exports = {
  async index(request, response){
    const medidas = await connection('medicao').select('*');

    return response.json(medidas);
  },/*
  async create(resquest, response){
    const { media } = resquest.body;
    const date = new Date();

    let hora = date.getHours()
    let minutes = date.getMinutes();

    let time = `${hora}:${minutes}`;

    console.log(typeof media);

    
    const medida = await connection('medicao').insert({
      media,
      time
    });

    return response.json(medida);
  }*/
}
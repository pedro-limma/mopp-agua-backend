const connection = require('../database/connection');

module.exports = {
  async create(request,response){
    const { litros, minutos } = request.body;

    await connection('medicao').insert({
      litros,
      minutos
    });

    return response.json({litros, minutos});
  }
};
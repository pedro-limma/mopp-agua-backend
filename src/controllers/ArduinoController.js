const connection = require('../database/connection');

module.exports = {
  async index(request, response){
    const medidas = connection('medicao').select('*');

    return response.json(medidas);
  }
}
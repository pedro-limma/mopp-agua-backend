const connection = require('../database/connection');

module.exports = {
  async create(request, response){
    const { title, description, value } = request.body;

    const user_id = request.headers.authorization;

    const [id] = await connection('notices').insert({
      title,
      description,
      value,
      user_id
    });

    return response.json({ id });
  },

  async index(request, response){
    const { page = 1 } = request.query;
    
    const [count] = await connection('notices').count();
    
    const notices = await connection('notices')
      .join('users','users.id', '=', 'notices.user_id')
      .limit(5)
      .offset((page - 1)*5)
      .select([
        'notices.*',
        'users.name',
        'users.phone',
        'users.numberAdress',
        'users.city',
        'users.uf',
        'users.cep',
      ]);

      response.header('X-total-Count', count['count(*)']);

      return response.json(notices);
  }
}
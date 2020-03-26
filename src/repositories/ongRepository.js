const connection = require('../database/connection');

class OngRepository
{
    async saveOng(data)
    {
      const {id,name,email,whatsapp,city,uf} = data;
      
      let queryResponse = await connection('ong').insert(
        {
          id,
          name,
          email,
          whatsapp,
          city,
          uf
        });
      return queryResponse;
    }
    
    async getOngs()
    {
      return await connection('ong').select('*');
    }
}

module.exports = OngRepository.prototype;
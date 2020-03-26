const connection = require('../database/connection');

async function sessionCreate(id)
{
    return await connection('ongs').where('id',id).select('name').first();
}

module.exports = 
{
    sessionCreate
}
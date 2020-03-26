const sessionRepository = require('../repositories/sessionRepository');

async function sessionCreate(id)
{
    return await sessionRepository.sessionCreate(id);
}

module.exports = 
{
    sessionCreate
}
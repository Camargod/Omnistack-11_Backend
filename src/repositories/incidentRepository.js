const connection = require('../database/connection')

async function saveIncident(incident)
{
    let [id] = await connection('incidents').insert(incident);
    return id;
}
async function getIncidentsWithOng(pagination)
{
    let [count] = await connection('incidents').count();

    let query = await connection('incidents').join('ong','ong.id','=','incidents.ong_id').limit(pagination.limit).offset((pagination.page - 1) * 5).select(['incidents.*','ong.name','ong.email','ong.whatsapp','ong.city','ong.uf']);

    let response = 
    {
        count,
        query
    }
    return response;
}
async function deleteIncidentValidation(id)
{
    return await connection('incidents').where('id',id).select('ong_id').first();
}
async function deleteIncident(id)
{
    return await connection('incidents').where('id',id).delete();
}
async function getIncidentsByOngId(ong_id)
{
    return await connection('incidents').where('ong_id',ong_id);
}
module.exports = 
{
    saveIncident,
    getIncidentsWithOng,
    deleteIncidentValidation,
    deleteIncident,
    getIncidentsByOngId
}
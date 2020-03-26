const incidentRepository = require('../repositories/incidentRepository')

async function saveIncident(body,ong_id)
{
    try
    {
        const {title, description, value} = body;
        let incident = 
        {
            title,
            description,
            value,
            ong_id
        };
        return await incidentRepository.saveIncident(incident);
    }
    catch(err)
    {
        return(err);
    }
    
}

async function getIncidentsWithOng(pagination)
{
    return await incidentRepository.getIncidentsWithOng(pagination);
}
async function deleteIncident(ong_id, id)
{
    try
    {
        let incident = await incidentRepository.deleteIncidentValidation(id);
        if(incident && incident.ong_id == ong_id)
        {
            await incidentRepository.deleteIncident(id);
            return (
                {
                    statuscode : 204
                }
            );
        }
        else
        {
            return (
                {
                    statuscode : 401
                }
            );
        }
    }
    catch(err)
    {
        return err;
    }
}

async function getIncidentsByOngId(ong_id) 
{  
    try 
    {
        return await incidentRepository.getIncidentsByOngId(ong_id);
    } 
    catch (err) 
    {
        throw err
    }
}

module.exports = {saveIncident, getIncidentsWithOng, deleteIncident,getIncidentsByOngId}
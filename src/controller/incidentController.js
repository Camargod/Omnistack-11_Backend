const incidentService = require('../services/incidentService');

function saveIncident(req,res)
{
    let body = req.body;
    let ong_id = req.headers.authorization;
    incidentService.saveIncident(body,ong_id).then((e)=>
    {
        return res.status(200).json(e);
    },
    (err)=>
    {
        return res.status(400).json(err);
    });
}

function getIncidents(req,res)
{
    const {page = 1,limit = 5} = req.body;
    let pagination = 
    {
        page,
        limit
    }
    incidentService.getIncidentsWithOng(pagination).then((e)=>
    {
        res.header('X-Total-Count',e.count['count(*)'])
        return res.status(200).json(e.query);
    },
    (err)=>
    {
        return res.status(400).json(err);
    });
}
function deleteIncident(req,res)
{
    let incident_id = req.body.id;
    let ong_id = req.headers.authorization;
    incidentService.deleteIncident(ong_id,incident_id).then((e)=>
    {
        return res.status(e.statuscode).json({});
    },
    (err)=>
    {
        return res.status(400).json(err);
    });
}

function getIncidentsByOngId(req,res)
{
    ong_id = req.params.ong_id;
    incidentService.getIncidentsByOngId(ong_id).then((e)=>
    {
        return res.status(200).json(e);
    },
    (err)=>
    {
        return res.status(400).json(err);
    });
}


module.exports = 
{
    saveIncident,
    getIncidents, 
    deleteIncident,
    getIncidentsByOngId
}
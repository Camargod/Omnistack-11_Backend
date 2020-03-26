const sessionService = require('../services/sessionService');

function sessionCreate(req, res)
{
    const {id} = req.body;

    sessionService.sessionCreate(id).then((e)=>
    {
        if(e) 
        {
            return res.status(200).json(e);
        }
        else
        {
            return res.status(400).json({error:"No ONG found with this id."});
        }
    },
    (err)=>
    {
        return res.status(400).json(err);
    });
}


module.exports = {sessionCreate};
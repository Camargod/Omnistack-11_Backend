const ongService = require('../services/ongService');

function saveOng(req,res)
{
    let body = req.body;
    ongService.ongSave(body).then((e)=>
    {
        return res.status(200).json(e);
    },
    (err)=>
    {
        res.status(400).json(err);
    });
}

function getOngs(req,res)
{
    ongService.ongsGet().then((e)=>
    {
        return res.status(200).json(e);
    },
    (err)=>
    {
        return res.status(400).json(err);
    });
}
module.exports = {saveOng, getOngs}



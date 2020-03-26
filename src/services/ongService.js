const ongRepository = require('../repositories/ongRepository')
const crypto = require('crypto');

class OngService
{
    async ongSave(body)
    {
        try
        {
            const {name, email, whatsapp, city, uf} = body;
            const id = crypto.randomBytes(4).toString('HEX');
            let values = 
            {
                id,
                name,
                email,
                whatsapp,
                city,
                uf
            }
            return await ongRepository.saveOng(values);
        }
        catch(err)
        {
            throw err;
        }
    }
    async ongsGet()
    {
        return await ongRepository.getOngs();
    }
}

module.exports = OngService.prototype;
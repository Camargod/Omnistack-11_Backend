const express = require('express');
const router = express.Router();
const ongsController = require('./controller/ongsController');
const incidentsController = require('./controller/incidentController');
const sessionController = require('./controller/sessionController')

router.get('/ongs', ongsController.getOngs);
router.post('/ongs',ongsController.saveOng);

router.get('/incidents', incidentsController.getIncidents);
router.get('/incidents/:ong_id', incidentsController.getIncidentsByOngId);
router.post('/incidents', incidentsController.saveIncident);
router.delete('/incidents', incidentsController.deleteIncident);

router.get('/session',sessionController.sessionCreate);



module.exports = router; 
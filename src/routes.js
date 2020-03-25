const express = require('express');
const router = express.Router();
const controllerTest = require('./controller/controllerTest');

router.get('/',controllerTest.root);



module.exports = router; 
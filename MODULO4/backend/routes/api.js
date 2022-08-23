const express = require('express');
const router = express.Router();

//*CONTROLADOR
const { getRepsByClient } = require('../controllers/reparaciones');
const { sendEMail } = require('../controllers/mail');

//* RUTA /api

//*READ
router.get('/:id', getRepsByClient);
router.post('/mail', sendEMail);



module.exports = router;
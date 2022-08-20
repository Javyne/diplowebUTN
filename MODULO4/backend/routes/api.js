//* path: api
const express = require('express');
const router = express.Router();

//*CONTROLADOR
const { getRepsByClient } = require('../controllers/reparaciones');

//*READ
router.get('/:id', getRepsByClient);



module.exports = router;
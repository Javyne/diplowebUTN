var express = require('express');
const { redirectIndex } = require('../controllers/index');
const { redirectClientes } = require('../controllers/clientes');

const { redirectRep } = require('../controllers/reparaciones');
var router = express.Router();

/* GET home page. */
router.get('/', redirectIndex);
router.get('/clientes', redirectClientes);
router.get('/rep', redirectRep);

module.exports = router;

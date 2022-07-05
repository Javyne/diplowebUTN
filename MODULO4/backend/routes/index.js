var express = require('express');
const { redirectIndex, logOut } = require('../controllers/index');
const { redirectClientes } = require('../controllers/clientes');
const { redirectUsuarios } = require('../controllers/usuarios');
const { redirectRep } = require('../controllers/reparaciones');
var router = express.Router();

/* GET home page. */
router.get('/', redirectIndex);
router.get('/clientes', redirectClientes);
router.get('/usuarios', redirectUsuarios);
router.get('/rep', redirectRep);

module.exports = router;

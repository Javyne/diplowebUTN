var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({id:'1', nombre:'Javier Russo', rol:'Administrador'});
});

module.exports = router;

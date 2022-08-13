var express = require('express');
const { redirectIndex } = require('../controllers/index');

var router = express.Router();

/* GET home page. */
router.get('/', redirectIndex);


module.exports = router;

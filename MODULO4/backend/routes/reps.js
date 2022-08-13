var express = require('express');
const { redirectRep, newRepForm, detailsRepForm, editRepForm, newRep, repDelete, repEdit } = require('../controllers/reparaciones');

var router = express.Router();

/* /reps */

//*CREATE
router.get('/new/', newRepForm);
router.post('/', newRep);

//* READ
router.get('/', redirectRep);
router.get('/details/:id', detailsRepForm);

//* UPDATE
router.get('/edit/:id', editRepForm);
router.post('/edit/:id', repEdit);

//* DELETE
router.post('/delete/:id', repDelete);


module.exports = router;
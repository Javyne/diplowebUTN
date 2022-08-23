const express = require('express');
const router = express.Router();

//*CONTROLADOR
const { redirectRep, newRepForm, detailsRepForm, editRepForm, newRep, repDelete, repEdit } = require('../controllers/reparaciones');

//*MIDDLEWARES
const { isLoggedIn } = require('../middlewares/rolValidate');
router.use(isLoggedIn)

//* RUTAS /reps

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
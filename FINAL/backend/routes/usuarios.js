const express = require('express');
const router = express.Router();

//*CONTROLADOR
const { redirectUsuarios, userEdit, userDelete, newUser, newUserForm, editUserForm, detailsUserForm } = require('../controllers/usuarios');

//*MIDDLEWARES
const { isAdmin, isLoggedIn } = require('../middlewares/rolValidate');
router.use(isLoggedIn)
router.use(isAdmin)

//*RUTAS /usuarios

//* CREATE
router.get('/new/', newUserForm);
router.post('/', newUser);

//* READ
router.get('/', redirectUsuarios);
router.get('/details/:id', detailsUserForm);

//* UPDATE
router.get('/edit/:id', editUserForm);
router.post('/edit/:id', userEdit);

//* DELETE
router.post('/delete/:id', userDelete);


module.exports = router;

var express = require('express');
const { redirectUsuarios, userEdit, userDelete, newUser, newUserForm, editUserForm, detailsUserForm } = require('../controllers/usuarios');
const { isAdmin } = require('../middlewares/rolValidate');
var router = express.Router();

/* /usuarios */
router.use(isAdmin)

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

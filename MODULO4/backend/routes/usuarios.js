var express = require('express');
const { redirectUsuarios, userEdit, userDelete, newUser } = require('../controllers/usuarios');
var router = express.Router();

/* /usuarios */

router.get('/', redirectUsuarios);
router.put('/', userEdit);
router.delete('/', userDelete);
router.post('/', newUser);


module.exports = router;

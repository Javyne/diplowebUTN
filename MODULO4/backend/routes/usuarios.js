var express = require('express');
const { redirectUsuarios, userEdit, userDelete, newUser } = require('../controllers/usuarios');
const { isAdmin } = require('../middlewares/rolValidate');
var router = express.Router();

/* /usuarios */
router.use(isAdmin)

router.get('/', redirectUsuarios);
router.put('/', userEdit);
router.delete('/', userDelete);
router.post('/', newUser);


module.exports = router;

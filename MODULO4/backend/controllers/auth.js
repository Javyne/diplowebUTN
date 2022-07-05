const { request, response } = require('express');
const users = require('../data/usuarios')

const defaultLogin = (req = request, res = response) => {
    res.render('admin/login', {
        layout: 'admin/layout'
    });
}


const validarUsuario = (req = request, res = response) => {

    const user = users.find(usuario => usuario.userName === req.body.usuario && usuario.pass === req.body.pass);

    if (user !== undefined) {
        req.session.nombre = user.nombre;
        return res.redirect('/')
    }
    else {
        return res.render('admin/login', {
            layout: 'admin/layout',
            error: 'Error en usuario o contraseña'
        });

    }
};

const logOut = (req = request, res = response) => {
    req.session.destroy();
    res.redirect('/');
};

module.exports = {
    validarUsuario,
    defaultLogin,
    logOut
}
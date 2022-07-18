const { request, response } = require('express');
const clientes = require('../data/clientes')

const redirectClientes = (req = request, res = response) => {
  if (req.session.nombre) {
    res.render('pages/tablePage', {
      title: '<i class="bi bi-people"></i>&nbsp;/ Clientes',
      newButton: '<i class="bi bi-person-plus icon-new"></i>',
      clientes: 'active',
      data: clientes
    });
  } else {
    res.redirect('api/auth');
  }
}

module.exports = {
  redirectClientes
}
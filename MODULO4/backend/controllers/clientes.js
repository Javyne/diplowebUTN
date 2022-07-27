const { request, response } = require('express');
const { getAllClients } = require('../models/clientes')

const redirectClientes = async (req = request, res = response) => {
  if (req.session.nombre) {
    res.render('pages/tablePage', {
      title: '<i class="bi bi-people"></i>&nbsp;/ Clientes',
      newButton: '<i class="bi bi-person-plus icon-new"></i>',
      clientes: 'active',
      data: await getAllClients()
    });
  } else {
    res.redirect('api/auth');
  }
}

module.exports = {
  redirectClientes
}
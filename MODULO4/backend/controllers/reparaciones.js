const { request, response } = require('express');
const reparaciones = require('../data/reparaciones')

const redirectRep = (req = request, res = response) => {
  if (req.session.nombre) {
    res.render('pages/tablePage', {
      title: '<i class="bi bi-clipboard-check"></i>&nbsp;/ Reparaciones',
      newButton: '<i class="bi bi-file-earmark-plus icon-new"></i>',
      rep: 'active',
      data: reparaciones
    });
  } else {
    res.redirect('api/auth');
  }
}

module.exports = {
  redirectRep
}
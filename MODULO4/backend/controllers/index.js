const { request, response } = require('express');
const { nroTecnicos, nroPendientes, nroReparados, topMarcas} = require('../models/index');

const redirectIndex = async(req = request, res = response) => {

  res.render('pages/index', {
    data: [await nroTecnicos(), await nroPendientes(), await nroReparados(), await topMarcas()],
    index: 'active'
  })
  if (req.session.nombre) {

  } else {
    res.redirect('/auth');
  }
}

module.exports = {
  redirectIndex
}
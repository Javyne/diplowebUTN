const { request, response } = require('express');

const redirectIndex = (req = request, res = response) => {


  res.render('pages/index', {
    index: 'active'
  })
  if (req.session.nombre) {

  } else {
    res.redirect('api/auth');
  }
}

module.exports = {
  redirectIndex
}
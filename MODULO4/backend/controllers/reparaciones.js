const { request, response } = require('express');

const redirectRep =(req = request, res = response) =>{
    if (req.session.nombre) {
        res.render('rep', { 
          usuario: 'Hola ' + req.session.nombre,
          rep:'active'
        })
      }else{
        res.redirect('api/auth');
      } 
}

module.exports = {
    redirectRep
}
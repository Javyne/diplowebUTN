const { request, response } = require('express');

const redirectUsuarios =(req = request, res = response) =>{
    if (req.session.nombre) {
        res.render('usuarios', { 
          usuario: 'Hola ' + req.session.nombre,
          usuarios:'active'
        })
      }else{
        res.redirect('api/auth');
      } 
}

module.exports = {
  redirectUsuarios
}
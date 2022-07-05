const { request, response } = require('express');

const redirectClientes =(req = request, res = response) =>{
    if (req.session.nombre) {
        res.render('clientes', { 
          usuario: 'Hola ' + req.session.nombre,
          clientes:'active'
        })
      }else{
        res.redirect('api/auth');
      } 
}

module.exports = {
    redirectClientes
}
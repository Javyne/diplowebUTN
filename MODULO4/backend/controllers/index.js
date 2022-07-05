const { request, response } = require('express');

const redirectIndex =(req = request, res = response) =>{
    if (req.session.nombre) {
        res.render('index', { 
          usuario: 'Hola ' + req.session.nombre,
        })
      }else{
        res.redirect('api/auth');
      } 
}



module.exports = {
    redirectIndex
}
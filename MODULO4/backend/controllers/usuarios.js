const { request, response } = require('express');
const { getAllUsers } = require('../models/usuarios');


const redirectUsuarios = async (req = request, res = response) => {
 
  res.render('pages/usuarios', {
    title: '<i class="bi bi-person-video3"></i>&nbsp;/ Usuarios',
    newButton: '<i class="bi bi-person-plus icon-new"></i>',
    usuario: 'Hola ' + req.session.nombre,
    usuarios: 'active',
    data: await getAllUsers()
  });
  if (req.session.nombre) { } else {
    res.redirect('api/auth');
  }
}


const userEdit = async (req, res) => {

}

const userDelete = async (req = request, res = response) => {

}

const newUser = async (req, res) => {

}



module.exports = {
  redirectUsuarios,
  userEdit,
  userDelete,
  newUser,
}
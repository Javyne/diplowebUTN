const { request, response } = require('express');
let users = require('../data/usuarios')

const redirectUsuarios = (req = request, res = response) => {

  res.render('pages/usuarios', {
    title: '<i class="bi bi-person-video3"></i>&nbsp;/ Usuarios',
    newButton: '<i class="bi bi-person-plus icon-new"></i>',
    usuario: 'Hola ' + req.session.nombre,
    usuarios: 'active',
    data: users
  });
  if (req.session.nombre) { } else {
    res.redirect('api/auth');
  }
}


const userEdit = (req, res) => {
  const usuario = users.find(usuario => usuario.id === parseInt(req.params.id));
  console.log(req.params, usuario);
}

const userDelete = (req = request, res = response) => {
  users = users.filter(user => user.id !== parseInt(req.params.id));
  res.redirect('/usuarios');
}

const newUser = (req, res) => {
  console.log(req.params);

  const user = {
    id: users.length + 1,
    userName: req.params.userName,
    pass: req.params.pass,
    nombre: req.params.nombre,
    img: req.params.img,
  }

  users.push(user);
  res.render('partials/usersModal')
    ;

}



module.exports = {
  redirectUsuarios,
  userEdit,
  userDelete,
  newUser,
}
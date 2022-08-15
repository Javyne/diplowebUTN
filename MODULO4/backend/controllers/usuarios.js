const { request, response } = require('express');
const { isChecked, imageOrDefault } = require('../helpers/funciones')
const { getAllUsers, getUserByName, insertUser, getUserById, updateUser, deleteUser } = require('../models/usuarios');
const md5 = require('md5');

//* CREATE GET
const newUserForm = (req, res) => {
  res.render('partials/usersForm/newUserForm')
}

//* CREATE POST
const newUser = async (req, res) => {

  const user = {
    username: req.body.username,
    pass: md5(req.body.pass),
    nombre: req.body.nombre,
    img: imageOrDefault(req.body.img),
    es_admin: isChecked(req.body.es_admin),
    es_tecnico: isChecked(req.body.es_tecnico),
  }

  if (await getUserByName(user.username) !== undefined) {

    res.render('partials/usersForm/newUserForm', {
      data: user,
      aviso:"usuario existente"
    });

  }else{
    await insertUser(user);
    res.redirect('/usuarios')  
  }
  
}

//* READ GET
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

const detailsUserForm = async (req, res) => {

  const user = await getUserById(req.params.id);
  res.render('partials/usersForm/detailsUserForm',{
    data: user
  });
 
}

//* UPDATE GET
const editUserForm = async (req, res) => {

  const user = await getUserById(req.params.id);
  res.render('partials/usersForm/editUserForm',{
    data: user
  });
 
}

//* UPDATE POST
const userEdit = async (req, res) => {

  const user = {
    username: req.body.username,
    nombre: req.body.nombre,
    img: req.body.img,
    es_admin: isChecked(req.body.es_admin),
    es_tecnico: isChecked(req.body.es_tecnico),
  }

  await updateUser(user, parseInt(req.params.id));
  res.redirect('/usuarios')  
}

//* DELETE
const userDelete = async (req, res) => {
    
    await deleteUser(parseInt(req.params.id));
    res.redirect('/usuarios')  

}


module.exports = {
  redirectUsuarios,
  userEdit,
  userDelete,
  newUser,
  newUserForm,
  editUserForm,
  detailsUserForm
}
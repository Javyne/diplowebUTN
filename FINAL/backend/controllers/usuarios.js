const { request, response } = require('express');
const { isChecked } = require('../helpers/funciones');
const { imageOrDefault, destroyImage, setUrls, setUrl } = require('../helpers/cloudImages');
const { getAllUsers, getUserByName, insertUser, getUserById, updateUser, deleteUser } = require('../models/usuarios');
const { getRepsByUser } = require('../models/reparaciones');
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
    img: req.files ? await imageOrDefault(req.files.imgFile) : await imageOrDefault(),
    es_admin: isChecked(req.body.es_admin),
    es_tecnico: isChecked(req.body.es_tecnico),
  }

  if (await getUserByName(user.username) !== undefined) {

    res.render('partials/usersForm/newUserForm', {
      data: user,
      aviso: "usuario existente"
    });

  } else {
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
    data: setUrls(await getAllUsers())
  });

}

const detailsUserForm = async (req, res) => {

  res.render('partials/usersForm/detailsUserForm', {
    data: setUrl(await getUserById(req.params.id)),
  });

}

//* UPDATE GET
const editUserForm = async (req, res) => {

  res.render('partials/usersForm/editUserForm', {
    data: setUrl(await getUserById(req.params.id))
  });

}

//* UPDATE POST
const userEdit = async (req, res) => {

  const user = {
    username: req.body.username,
    nombre: req.body.nombre,
    img: req.files ? await imageOrDefault(req.files.imgFile) : req.body.img,
    es_admin: isChecked(req.body.es_admin),
    es_tecnico: isChecked(req.body.es_tecnico),
  }

  await updateUser(user, parseInt(req.params.id));
  res.redirect('/usuarios')
}

//* DELETE
const userDelete = async (req, res) => {

  const user = await getUserById(req.params.id);

  if (getRepsByUser(user.user_id).length > 0) {
    res.redirect('/usuarios')
  }

  await destroyImage(user.img)
  await deleteUser(user.user_id);

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
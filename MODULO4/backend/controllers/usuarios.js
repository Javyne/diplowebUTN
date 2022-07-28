const { request, response } = require('express');
const { getAllUsers, getUserByName, insertUser } = require('../models/usuarios');


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

  const result = undefined;

  const user = {
    username: req.body.username,
    pass: req.body.pass,
    nombre: req.body.nombre,
    img: req.body.img,
    es_admin: isChecked(req.body.es_admin),
    es_tecnico: isChecked(req.body.es_tecnico),
  }
  
  if (getUserByName(user.username) !== undefined) {
    res.send({aviso:"usuario existente"});
  }else{
    result = await insertUser(user);  
  }
  
  if(result !== undefined){
      res.status(201).json(result);
  }
}



module.exports = {
  redirectUsuarios,
  userEdit,
  userDelete,
  newUser,
}
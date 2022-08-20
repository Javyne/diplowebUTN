const { request, response } = require('express');
const { getAllClients } = require('../models/clientes');
const { getAllReps, getRepById, insertRep, getRepJOINClient, updateRep, deleteRep, getRepsByClientId } = require('../models/reparaciones')

//* CREATE GET
const newRepForm = async (req = request, res = response) => {

  res.render('partials/repsForm/newRepForm', {
    clientes: await getAllClients()
  })

}

//* CREATE POST
const newRep = async (req = request, res = response) => {

  const rep = {
    fecha: req.body.fecha,
    cliente_id: parseInt(req.body.cliente_id),
    equipo: req.body.equipo,
    marca: req.body.marca,
    modelo: req.body.modelo,
    falla: req.body.falla,
    presupuesto: parseInt(req.body.presupuesto),
  }

  await insertRep(rep);
  res.redirect('/reps')

}

//* READ GET
const redirectRep = async (req = request, res = response) => {
  if (req.session.nombre) {
    res.render('pages/reparaciones', {
      rep: 'active',
      data: await getAllReps()
    });
  } else {
    res.redirect('api/auth');
  }
}

const detailsRepForm = async (req = request, res = response) => {
  const orden = await getRepJOINClient(req.params.id);

  res.render('partials/repsForm/detailsRepForm', {
    data: orden
  });
}

const getRepsByClient = async (req, res) => {

  res.json(await getRepsByClientId(req.params.id));
}

//* READ POST
const findRep = async (req, res) => {
  const reparaciones = await getAllReps();
  const filtro = req.body.buscar;

  res.render('pages/reps', {
    rep: 'active',
    data: filtrar(reparaciones, filtro)
  });
}

//* UPDATE GET
const editRepForm = async (req = request, res = response) => {
  const orden = await getRepById(req.params.id);

  res.render('partials/repsForm/editRepForm', {
    data: orden,
    clientes: await getAllClients()
  });
}

//* UPDATE POST
const repEdit = async (req = request, res = response) => {
  const orden = {
    fecha: req.body.fecha,
    cliente_id: parseInt(req.body.cliente_id),
    equipo: req.body.equipo,
    marca: req.body.marca,
    modelo: req.body.modelo,
    falla: req.body.falla,
    presupuesto: parseInt(req.body.presupuesto),
    reparacion: req.body.reparacion,
    costo: req.body.costo,
    fecha_reparacion: req.body.fecha_reparacion,
    fecha_entrega: req.body.fecha_entrega
  }

  await updateRep(orden, parseInt(req.params.id));
  res.redirect('/reps')
}

//* DELETE
const repDelete = async (req, res) => {
    
  await deleteRep(parseInt(req.params.id));
  res.redirect('/reps')  

}



module.exports = {
  detailsRepForm,
  editRepForm,
  findRep,
  newRep,
  newRepForm,
  redirectRep,
  repDelete,
  repEdit,
  getRepsByClient
}
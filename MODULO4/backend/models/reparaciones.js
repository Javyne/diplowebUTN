const { getAll, getFirstWith } = require('../models/db');

const tabla = `reparacion`;
const class_id = `orden_id`;
  
const getRepById = async (id) => {
    return await getFirstWith(tabla, `${class_id} = ${id}`);   
}

const getAllReps = async () =>{
    return await getAll(tabla)
}

module.exports ={
    getAllReps,
    getRepById,
}
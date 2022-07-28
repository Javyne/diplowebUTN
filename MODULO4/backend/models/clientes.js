const { getAll, getFirstWith } = require('../models/db');

const tabla = `cliente`;
const class_id = `cliente_id`;
 
const getClientById = async (id) => {
    return await getFirstWith(tabla, `${class_id} = ${id}`);   
}

const getAllClients = async () =>{
    return await getAll(tabla)
}

module.exports ={
    getAllClients,
    getClientById
}
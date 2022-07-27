const { getAll, getFirstWith } = require('../models/db');

const tabla = `usuario`;
const class_id = `ciente_id`;

const getUserByName = async (username) => {
    return await getFirstWith(tabla, `username = '${username}'`);
}
  
const getUserById = async (id) => {
    return await getFirstWith(tabla, `${class_id} = ${id}`);   
}

const getUserByPN = async (pass, username) => {
    return await getFirstWith(tabla, `username = '${username}' and pass = '${pass}'`);;   
}

const getAllUsers = async () =>{
    return await getAll(tabla)
}



module.exports ={
    getAllUsers,
    getUserById,
    getUserByName,
    getUserByPN
}
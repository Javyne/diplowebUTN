const { getAll, getFirstWith, insert } = require('../models/db');
const md5 = require('md5');

const tabla = `usuario`;
const class_id = `ciente_id`;

const getUserByName = async (username) => {
    return await getFirstWith(tabla, `username = '${username}'`);
}
  
const getUserById = async (id) => {
    return await getFirstWith(tabla, `${class_id} = ${id}`);   
}

const getUserByPN = async (pass, username) => {
    return await getFirstWith(tabla, `username = '${username}' and pass = '${md5(pass)}'`);
}

const getAllUsers = async () =>{
    return await getAll(tabla)
}

const insertUser = async (user) =>{
    return await insert(tabla, user)
}


module.exports ={
    getAllUsers,
    getUserById,
    getUserByName,
    getUserByPN,
    insertUser
}
const { getAll, getFirstWith, insert, deleteById, update, pool } = require('../models/db');

const tabla = `reparacion`;
const class_id = `orden_id`;

const getRepById = async (id) => {
    return await getFirstWith(tabla, `${class_id} = ${id}`);
}

const getAllReps = async () => {
    return await getAll(tabla)
}

const insertRep = async (rep) => {
    return await insert(tabla, rep)
}

const deleteRep = async (id) => {
    return await deleteById(tabla, class_id, id)
}

const updateRep = async (rep, id) => {
    return await update(tabla, rep, class_id, id)
}

const getRepJOINClient = async (id) => {
    const query = `SELECT * FROM reparacion INNER JOIN cliente ON reparacion.cliente_id = cliente.cliente_id WHERE orden_id = ${id}`

    try {
        const orden = await pool.query(query);
        return orden[0];
    }
    catch (error) {
        throw error;
    }

}

const getRepsByUser = async (id) => {
    
    const query = `SELECT * FROM reparacion INNER JOIN usuario ON reparacion.user_id = usuario.user_id WHERE usuario.user_id = ${id}`

    try {
        return await pool.query(query);
    }
    catch (error) {
        throw error;
    }

}

const getRepsByClientId = async (id) => {
    const query = `SELECT orden_id, equipo, marca, modelo, fecha, fecha_reparacion, fecha_entrega FROM reparacion INNER JOIN cliente ON reparacion.cliente_id = cliente.cliente_id WHERE cliente.cliente_id = ${id}`

    try {
        return await pool.query(query);;
    }
    catch (error) {
        throw error;
    }

}
module.exports = {
    getAllReps,
    getRepById,
    insertRep,
    deleteRep,
    updateRep,
    getRepJOINClient,
    getRepsByUser,
    getRepsByClientId

}
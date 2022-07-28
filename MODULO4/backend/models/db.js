const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSLQ_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME
});

pool.query = util.promisify(pool.query);

const getAll = async (table) =>{
    try {
        const users = await pool.query(`select * from ${table}`);
        return users;
    }
    catch (error) {
        throw error;
    }
}

const getAllWith = async (table, conditions) => {
    try {
        const users = await pool.query(`select * from ${table} where ${conditions}`);
        return users;
    }
    catch (error) {
        throw error;
    }
    
}

const getFirst = async (table) => {
    const result = await getAll(table)
    return result[0];
}

const getFirstWith = async (table, conditions) => {
    const result = await getAllWith(table, conditions)
    return result[0];
}

const insert = async (table, data) => {
    try{
       return await pool.query(`INSERT INTO ${table} SET ?`,[data]); 
    }catch(err){
        throw err;
    } 
}

module.exports = {
    pool,
    getAll,
    getAllWith,
    getFirst,
    getFirstWith,
    insert
};
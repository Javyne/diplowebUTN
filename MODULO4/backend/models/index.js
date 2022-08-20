const { pool } = require('../models/db');


const nroTecnicos = async () => {
    try{
        const query = "SELECT count(es_tecnico) as kpi FROM usuario WHERE es_tecnico = true";
        const res = await pool.query(query);
        return {
            kpi: res[0].kpi,
            title: 'tecnicos',
            class: "GridCardKpi"
        };
    }catch(error){
        return {};
    }
}

const nroPendientes = async () => {
    try{
        const query = "SELECT (COUNT(orden_id)-COUNT(fecha_entrega)) as kpi FROM reparacion";
        const res = await pool.query(query);
        return {
            kpi: res[0].kpi,
            title: 'ord. pendientes',
            class: "GridCardKpi"
        };
    }catch(error){
        return {};
    }
}

const nroReparados = async () => {
    try{
        const query = "SELECT COUNT(fecha_entrega) as kpi FROM reparacion";
        const res = await pool.query(query);
        return {
            kpi: res[0].kpi,
            title: 'reparados',
            class: "GridCardKpi"
        };
    }catch(error){
        return {};
    }
}

const topMarcas = async () => {
    try{
        const query = "SELECT marca as kpi FROM `reparacion` GROUP by marca ORDER BY count(marca)  DESC limit 5;";
        const response = await pool.query(query);
        let result = "";
        response.forEach(kpi => result += kpi.kpi + " - ");
        return {
            kpi: result,
            title: 'top 5 marcas',
            class: "GridCardList"
        };
    }catch(error){
        return {};
    }
}

module.exports ={
    nroTecnicos,
    nroPendientes,
    nroReparados,
    topMarcas
}
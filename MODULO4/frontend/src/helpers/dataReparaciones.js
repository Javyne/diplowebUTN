import {reparaciones} from '../data/dataClientes.js';

export const dataReparaciones = (id) =>{

    return reparaciones.filter(item => item.cliente_id === id)
}
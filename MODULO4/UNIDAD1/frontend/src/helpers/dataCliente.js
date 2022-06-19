import {clientes} from '../data/dataClientes.js';

export const dataCliente = (id, pass) =>{
    return (clientes.find(cliente => cliente.id === id && cliente.pass === pass) !== undefined)
}
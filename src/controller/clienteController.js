const clienteServices = require('../services/clienteServices');

const listarClientes = async (req, res) => {
    let json = {error:'', result:[]};

    let clientes = await clienteServices.listarClientes();

    for(let i in clientes){
        json.result.push({
            idCliente: clientes[i].idCliente,
            nomeCompleto: clientes[i].nomeCompleto,
            nomeSocial: clientes[i].nomeSocial
        });
    }  
    res.json(json);
}

module.exports = {
    listarClientes,
};
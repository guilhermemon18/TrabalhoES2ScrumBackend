const database = require('../database/dbConfig');

const listarClientes = () => {
    return new Promise((aceito, rejeitado) => {
        database.query('SELECT * FROM cliente', (error, results) =>{
            if (error) { rejeitado(error); return; }
            aceito(results);
        });
    });
}

const buscarCliente= (idCliente) => {
    return new Promise((aceito, rejeitado) => {
        database.query('SELECT * FROM cliente WHERE cliente.idCliente = ?', [idCliente], (error, results) =>{
            if (error) { rejeitado(error); return; }
            if (results.length > 0){
                aceito(results[0]);
            }else{
                aceito(false);
            }
        });
    });
}

module.exports = {
    listarClientes,
    buscarCliente,
};
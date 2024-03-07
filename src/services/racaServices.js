const database = require('../database/dbConfig');

const listarRaca = () => {
    return new Promise((aceito, rejeitado) => {
        database.query('SELECT * FROM raca', (error, results) =>{
            if (error) { rejeitado(error); return; }
            aceito(results);
        });
    });
}

const buscarRaca = (idRaca) => {
    return new Promise((aceito, rejeitado) => {
        database.query('SELECT * FROM raca WHERE raca.idRaca = ?', [idRaca], (error, results) =>{
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
    listarRaca,
    buscarRaca,
};
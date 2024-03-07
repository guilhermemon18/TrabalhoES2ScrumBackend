const database = require('../database/dbConfig');

const listarGenero = () => {
    return new Promise((aceito, rejeitado) => {
        database.query('SELECT * FROM genero', (error, results) =>{
            if (error) { rejeitado(error); return; }
            aceito(results);
        });
    });
}

const buscarGenero = (idGenero) => {
    return new Promise((aceito, rejeitado) => {
        database.query('SELECT * FROM genero WHERE genero.idGenero = ?', [idGenero], (error, results) =>{
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
    listarGenero,
    buscarGenero,
};
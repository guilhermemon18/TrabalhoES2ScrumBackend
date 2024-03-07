const database = require('../database/dbConfig');

const buscarTime= (idTime) => {
    return new Promise((aceito, rejeitado) => {
        database.query('SELECT * FROM time WHERE time.idTime = ?', [idTime], (error, results) =>{
            if (error) { rejeitado(error); return; }
            if (results.length > 0){
                aceito(results[0]);
            }else{
                aceito(false);
            }
        });
    });
}

const inserirTime = (nomeTime) => {
    return new Promise((aceito, rejeitado) => {
        database.query('INSERT INTO time (nomeTime) VALUES (?)', [nomeTime], (error, results) =>{
            if (error) { rejeitado(error); return; }
            aceito(results.insertCodigo);
        });
    });
}

module.exports = {
    buscarTime,
    inserirTime
};
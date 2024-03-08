const database = require('../database/dbConfig');

const buscarEndereco = (idEndereco) => {
    return new Promise((aceito, rejeitado) => {
        database.query('SELECT * FROM endereco WHERE endereco.idEndereco = ?', [idEndereco], (error, results) =>{
            if (error) { rejeitado(error); return; }
            if (results.length > 0){
                aceito(results[0]);
            }else{
                aceito(false);
            }
        });
    });
}

const inserirEndereco = (cep, idBairro, idCidade, idLogradouro) => {
    return new Promise((aceito, rejeitado) => {
        database.query('INSERT INTO profissional (cep, Bairro_idBairro, Cidade_idCidade, Logradouro_idLogradouro) VALUES (?, ?, ?, ?)', [cep, idBairro, idCidade, idLogradouro], (error, results) =>{
            if (error) { rejeitado(error); return; }
            aceito(results.insertCodigo);
        });
    });
}

const buscarIdEndereco = (cep) => {
    return new Promise((aceito, rejeitado) => {
        database.query('SELECT * FROM endereco WHERE endereco.cep = ?', [cep], (error, results) =>{
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
    buscarEndereco,
    inserirEndereco,
    buscarIdEndereco,
};
const database = require('../database/dbConfig');

const buscarUnidadeFederativa = (idUnidadeFederativa) => {
    return new Promise((aceito, rejeitado) => {
        database.query('SELECT * FROM unidadefederativa WHERE unidadefederativa.idUnidadeFederativa = ?', [idUnidadeFederativa], (error, results) =>{
            if (error) { rejeitado(error); return; }
            if (results.length > 0){
                aceito(results[0]);
            }else{
                aceito(false);
            }
        });
    });
}

const buscarCidade = (idCidade) => {
    return new Promise((aceito, rejeitado) => {
        database.query('SELECT * FROM cidade WHERE cidade.idCidade = ?', [idCidade], (error, results) =>{
            if (error) { rejeitado(error); return; }
            if (results.length > 0){
                aceito(results[0]);
            }else{
                aceito(false);
            }
        });
    });
}

const buscarBairro = (idBairro) => {
    return new Promise((aceito, rejeitado) => {
        database.query('SELECT * FROM bairro WHERE bairro.idBairro = ?', [idBairro], (error, results) =>{
            if (error) { rejeitado(error); return; }
            if (results.length > 0){
                aceito(results[0]);
            }else{
                aceito(false);
            }
        });
    });
}
const buscarTipoLogradouro = (idTipoLogradouro) => {
    return new Promise((aceito, rejeitado) => {
        database.query('SELECT * FROM tipologradouro WHERE tipologradouro.idTipoLogradouro = ?', [idTipoLogradouro], (error, results) =>{
            if (error) { rejeitado(error); return; }
            if (results.length > 0){
                aceito(results[0]);
            }else{
                aceito(false);
            }
        });
    });
}
const buscarLogradouro = (idLogradouro) => {
    return new Promise((aceito, rejeitado) => {
        database.query('SELECT * FROM logradouro WHERE logradouro.idLogradouro = ?', [idLogradouro], (error, results) =>{
            if (error) { rejeitado(error); return; }
            if (results.length > 0){
                aceito(results[0]);
            }else{
                aceito(false);
            }
        });
    });
}
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
module.exports = {
    buscarUnidadeFederativa,
    buscarCidade,
    buscarBairro,
    buscarTipoLogradouro,
    buscarLogradouro,
    buscarEndereco,
};
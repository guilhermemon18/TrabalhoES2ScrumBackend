const database = require('../database/dbConfig');


const listarProjetos = () => {
    return new Promise((aceito, rejeitado) => {
        database.query('SELECT * FROM projeto WHERE isAtivo = 1', (error, results) =>{
            if (error) { rejeitado(error); return; }
            aceito(results);
        });
    });
}

const buscarProjeto= (idProjeto) => {
    return new Promise((aceito, rejeitado) => {
        database.query('SELECT * FROM projeto WHERE projeto.idProjeto = ? AND isAtivo = 1', [idProjeto], (error, results) =>{
            if (error) { rejeitado(error); return; }
            if (results.length > 0){
                aceito(results[0]);
            }else{
                aceito(false);
            }
        });
    });
}

const inserirProjeto = (nomeProjeto, objetivo, dataInicio, dataTermino, valor, idCliente, idTime) => {
    return new Promise((aceito, rejeitado) => {
        database.query
        ('INSERT INTO projeto (nomeProjeto, objetivo, dataInicio, dataTermino, valor, isAtivo, Cliente_idCliente, Time_idTime) VALUES (?,?,?,?,?,?,?,?)', 
        [nomeProjeto, objetivo, dataInicio, dataTermino, valor, 1, idCliente, idTime], (error, results) =>{
            if (error) { rejeitado(error); return; }
            aceito(results.insertCodigo);
        });
    });
}

const alterarTime = (idTime, nomeTime) => {
    return new Promise((aceito, rejeitado) => {
        database.query('UPDATE time SET nomeTime = ?  WHERE idTime = ?', [nomeTime, idTime], (error, results) =>{
            if (error) { rejeitado(error); return; }
            aceito(results);
        });
    });
}

const excluirTime = (idTime) => {
    return new Promise((aceito, rejeitado) => {
        database.query('UPDATE time SET isAtivo = 0 WHERE idTime = ?', [idTime], (error, results) =>{
            if (error) { rejeitado(error); return; }
            aceito(results);
        });
    });
}

module.exports = {
    listarProjetos,
    buscarProjeto,
    inserirProjeto,
    alterarTime,
    excluirTime
};
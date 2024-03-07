const database = require('../database/dbConfig');

const listarProfissional = () => {
    return new Promise((aceito, rejeitado) => {
        database.query('SELECT * FROM profissional', (error, results) =>{
            if (error) { rejeitado(error); return; }
            aceito(results);
        });
    });
}

const buscarProfissional = (idProfissional) => {
    return new Promise((aceito, rejeitado) => {
        database.query('SELECT * FROM profissional WHERE profissional.idProfissional = ?', [idProfissional], (error, results) =>{
            if (error) { rejeitado(error); return; }
            if (results.length > 0){
                aceito(results[0]);
            }else{
                aceito(false);
            }
        });
    });
}
const inserirProfissional = (nomeProfissional, nomeSocial, cpf, dataNascimento, nroEndereco, complementoEndereco, idEndereco, idRaca, idGenero, idTime, idEspecialidade) => {
    return new Promise((aceito, rejeitado) => {
        database.query('INSERT INTO profissional (nomeProfissional, nomeSocial, cpf, dataNascimento, nroEndereco, complementoEndereco, Endereco_idEndereco, Raca_idRaca, Genero_idGenero, Time_idTime, Especialidade_idEspecialidade) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [nomeProfissional, nomeSocial, cpf, dataNascimento, nroEndereco, complementoEndereco, idEndereco, idRaca, idGenero, idTime, idEspecialidade], (error, results) =>{
            if (error) { rejeitado(error); return; }
            aceito(results.insertCodigo);
        });
    });
}

const alterarProfissional = (idProfissional, nomeProfissional, nomeSocial, cpf, dataNascimento, nroEndereco, complementoEndereco, cep, idEndereco, idRaca, idGenero, idTime, idEspecialidade) => {
    return new Promise((aceito, rejeitado) => {
        database.query('UPDATE profissional set nomeProfissional = ?, nomeSocial = ?, cpf = ?, dataNascimento = ?, nroEndereco = ?, complementoEndereco = ?, Endereco_idEndereco = ?, Raca_idRaca = ?, Genero_idGenero = ?, Time_idTime = ?, Especialidade_idEspecialidade = ?,  WHERE idUsuario = ?', [idProfissional, nomeProfissional, nomeSocial, cpf, dataNascimento, nroEndereco, complementoEndereco, cep, idEndereco, idRaca, idGenero, idTime, idEspecialidade], (error, results) =>{
            if (error) { rejeitado(error); return; }
            aceito(results);
        });
    });
}

const excluirProfissional = (idProfissional) => {
    return new Promise((aceito, rejeitado) => {
        database.query('DELETE FROM profissional WHERE idProfissional = ?', [idProfissional], (error, results) =>{
            if (error) { rejeitado(error); return; }
            aceito(results);
        });
    });
}

module.exports = {
    listarProfissional,
    buscarProfissional,
    inserirProfissional,
    alterarProfissional,
    excluirProfissional,
};
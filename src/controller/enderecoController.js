const enderecoServices = require('../services/enderecoServices');

const buscarUnidadeFederativa = async (req, res) => {
    let json = { error: '', result: {} };

    let idUnidadeFederativa = req.params.idUnidadeFederativa;
    let unidadeFederativa = await unidadeFederativaServices.buscar(idUnidadeFederativa);
    
    console.log();

    if (unidadeFederativa) {
        json.result = {
            idUnidadeFederativa: unidadeFederativa.idUnidadeFederativa,
            unidadeFederativa: unidadeFederativa.unidadeFederativa,
            siglaUnidadeFederativa: unidadeFederativa.siglaUnidadeFederativa,
        };
    }
    res.json(json);
}
const buscarCidade = async (req, res) => {
    let json = { error: '', result: {} };

    let idCidade = req.params.idCidade;
    let cidade = await cidadeServices.buscar(idCidade);
    
    console.log();

    if (cidade) {
        json.result = {
            idCidade: cidade.idCidade,
            cidade: cidade.cidade,
        };
    }
    res.json(json);
}
const buscarBairro = async (req, res) => {
    let json = { error: '', result: {} };

    let idBairro = req.params.idBairro;
    let bairro = await bairroServices.buscar(idBairro);
    
    console.log();

    if (bairro) {
        json.result = {
            idBairro: bairro.idBairro,
            bairro: bairro.Bairro,
        };
    }
    res.json(json);
}
const buscarTipoLogradouro = async (req, res) => {
    let json = { error: '', result: {} };

    let idTipoLogradouro = req.params.idTipoLogradouro;
    let tipoLogradouro = await tipoLogradouroServices.buscar(idTipoLogradouro);
    
    console.log();

    if (tipoLogradouro) {
        json.result = {
            tipoLogradouro: tipoLogradouro.idTipoLogradouro,
            tipoLogradouro: tipoLogradouro.tipoLogradouro,
        };
    }
    res.json(json);
}
const buscarLogradouro = async (req, res) => {
    let json = { error: '', result: {} };

    let idLogradouro = req.params.idLogradouro;
    let logradouro = await logradouroServices.buscarLogradouro(idLogradouro);
    
    console.log();

    if (logradouro) {
        json.result = {
            idLogradouro: logradouro.idLogradouro,
            logradouro: logradouro.logradouro,
        };
    }
    res.json(json);
}

const buscarEndereco = async (req, res) => {
    let json = { error: '', result: {} };

    let idEndereco = req.params.idEndereco;
    let endereco = await enderecoServices.buscarEndereco(idEndereco);
    
    console.log(endereco);

    if (endereco) {
        json.result = {
            idEndereco: endereco.idEndereco,
            cep: endereco.cep,
        };
    }
    res.json(json);
}

module.exports = {
    buscarUnidadeFederativa,
    buscarCidade,
    buscarBairro,
    buscarTipoLogradouro,
    buscarLogradouro,
    buscarEndereco,
};
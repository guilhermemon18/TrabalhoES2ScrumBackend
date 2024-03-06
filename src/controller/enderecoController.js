const enderecoServices = require('../services/enderecoServices');

const buscarEnderecoCompleto = async (req, res) => {
    let json = { error: '', result: {} };

    let idEndereco = req.params.idEndereco;
    let endereco = await enderecoServices.buscarEndereco(idEndereco);
    let bairro = await enderecoServices.buscarBairro(endereco.Bairro_idBairro);
    let logradouro = await enderecoServices.buscarLogradouro(endereco.Logradouro_idLogradouro);
    let tipoLogradouro = await enderecoServices.buscarTipoLogradouro(logradouro.TipoLogradouro_idTipoLogradouro);
    let cidade = await enderecoServices.buscarCidade(endereco.Cidade_idCidade);
    let unidadeFederativa = await enderecoServices.buscarUnidadeFederativa(cidade.UnidadeFederativa_idUnidadeFederativa);

    console.log(endereco);

    if (endereco) {
        json.result = {
            idEndereco: endereco.idEndereco,
            cep: endereco.cep,
            bairro: bairro.bairro,
            cidade: cidade.cidade,
            tipoLogradouro: tipoLogradouro.tipoLogradouro,
            logradouro: logradouro.logradouro,
            UF: unidadeFederativa.unidadeFederativa,
            siglaUF: unidadeFederativa.siglaUnidadeFederativa
        };
    }

    res.json(json);
}

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
    buscarEnderecoCompleto,
    buscarUnidadeFederativa,
    buscarCidade,
    buscarBairro,
    buscarTipoLogradouro,
    buscarLogradouro,
    buscarEndereco,
};
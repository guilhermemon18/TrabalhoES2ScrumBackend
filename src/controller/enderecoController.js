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

const inserirEndereco = async(req, res) => {
    let json = {error:'', result:{}};

    let cep = req.body.cep;

    if(cep){
        if(!buscarCep(cep)) {
            let idCep = await cepServices.inserirCep();
            json.result = {
                idCep: idCep,
                cep,
            };
        }
    }else{
        json.error = 'Campos obrigatórios não enviados!';
    }
    res.json(json);
}

const buscarIdEndereco = async (req, res) => {
    let json = { error: '', result: {} };

    let cep = req.params.cep;
    let endereco = await enderecoServices.buscarIdEndereco(idEndereco);
    
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
    buscarEndereco,
    inserirEndereco,
    buscarIdEndereco,
};
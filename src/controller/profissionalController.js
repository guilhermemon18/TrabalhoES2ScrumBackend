const profissionalServices = require('../services/profissionalServices');

const buscarProfissional = async (req, res) => {
    let json = { error: '', result: {} };

    let idProfissional = req.params.idProfissional;
    let profissional = await profissionalServices.buscarProfissional(idProfissional);
    
    console.log(profissional);

    if (profissional) {
        json.result = {
            idProfissional: profissional.idProfissional,
            nomeCompleto: profissional.nomeCompleto,
            nomeSocial: profissional.nomeSocial,
            cpf: profissional.cpf,
            dataNascimento: profissional.dataNascimento,
            nroEndereco: profissional.nroEndereco,
            complementoEndereco: profissional.complementoEndereco,
            cep: profissional.cep,
            unidadeFederativa: profissional.nomeUF,
            municipio: profissional.nomeMunicipio,
            bairro: profissional.nomeBairro,
            tipoLogradouro: profissional.tipoLogradouro,
            logradouro: profissional.nomeLogradouro
        };
    }
    res.json(json);
}

module.exports = {
    buscarProfissional,
};
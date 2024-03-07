const profissionalServices = require('../services/profissionalServices');
const racaServices = require('../services/racaServices');
const generoServices = require('../services/generoServices');
const especialidadeServices = require('../services/especialidadeServices');

const buscarProfissional = async (req, res) => {
    let json = { error: '', result: {} };

    let idProfissional = req.params.idProfissional;
    let profissional = await profissionalServices.buscarProfissional(idProfissional);
    let raca = await racaServices.buscarRaca(profissional.Raca_idRaca);
    let genero = await generoServices.buscarGenero(profissional.Genero_idGenero);
    let especialidade = await especialidadeServices.buscarEspecialidade(profissional.Especialidade_idEspecialidade);

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
            raca: raca.raca,
            genero: genero.genero,
            especialidade: especialidade.tipoEspecialidade,
            siglaEspecialidade: especialidade.siglaEspecialidade,
        };
    }
    res.json(json);
}

module.exports = {
    buscarProfissional,
};
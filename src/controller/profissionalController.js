const profissionalServices = require('../services/profissionalServices');
const racaServices = require('../services/racaServices');
const generoServices = require('../services/generoServices');
const especialidadeServices = require('../services/especialidadeServices');

const listarProfissional = async (req, res) => {
    let json = {error:'', result:[]};

    let profissionais = await profissionalServices.listarProfissional();

    for(let i in profissionais){
        let raca = await racaServices.buscarRaca(profissionais[i].Raca_idRaca);
        let genero = await generoServices.buscarGenero(profissionais[i].Genero_idGenero);
        //let time = await timeServices.buscarTime(profissionais[i].Time_idTime);
        // esperar integrar com feature/time
        let especialidade = await especialidadeServices.buscarEspecialidade(profissionais[i].Especialidade_idEspecialidade);
        json.result.push({
            idProfissional: profissionais[i].idProfissional,
            idProfissional: profissionais[i].idProfissional,
            nomeCompleto: profissionais[i].nomeCompleto,
            nomeSocial: profissionais[i].nomeSocial,
            cpf: profissionais[i].cpf,
            dataNascimento: profissionais[i].dataNascimento,
            nroEndereco: profissionais[i].nroEndereco,
            complementoEndereco: profissionais[i].complementoEndereco,
            cep: profissionais[i].cep,
            raca: raca.raca,
            genero: genero.genero,
            //time: time.nomeTime,
            // esperar integrar com feature/time
            especialidade: especialidade.tipoEspecialidade,
            siglaEspecialidade: especialidade.siglaEspecialidade,
        });
    }  
    res.json(json);
}

const buscarProfissional = async (req, res) => {
    let json = { error: '', result: {} };

    let idProfissional = req.params.id;
    let profissional = await profissionalServices.buscarProfissional(idProfissional);
    let raca = await racaServices.buscarRaca(profissional.Raca_idRaca);
    let genero = await generoServices.buscarGenero(profissional.Genero_idGenero);
    //let time = await timeSerevices.buscarRime(profissional.Time_idTime);
    // esperar integrar com feature/time
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
            raca: raca.raca,
            genero: genero.genero,
            //time: time.nomeTime,
            // esperar integrar com feature/time
            especialidade: especialidade.tipoEspecialidade,
            siglaEspecialidade: especialidade.siglaEspecialidade,
        };
    }
    res.json(json);
}

const inserirProfissional = async(req, res) => {
    let json = {error:'', result:{}};

    let nomeProfissional = req.body.nomeProfissional;
    let nomeSocial = req.body.nomeSocial;
    let cpf = req.body.cpf;
    let dataNascimento = req.body.dataNascimento;
    let nroEndereco = req.body.nroEndereco;
    let complementoEndereco = req.body.complementoEndereco;
    let idEndereco = 1;
    let idRaca = req.body.raca;
    let idGenero = req.body.genero;
    let idTime = 1;
    let idEspecialidade = req.body.especialidade;

    if(nomeProfissional && cpf && dataNascimento && nroEndereco && idEndereco && idRaca && idGenero && idTime && idEspecialidade){
        let idProfissional = await profissionalServices.inserirProfissional(nomeProfissional, nomeSocial, cpf, dataNascimento, nroEndereco, complementoEndereco, idEndereco, idRaca, idGenero, idTime, idEspecialidade);
        json.result = {
            idProfissional: idProfissional,
            // add resto dos atributos
        };
    }else{
        json.error = 'Campos obrigatórios não enviados!';
    }
    res.json(json);
}

const alterarProfissional = async(req, res) => {
    let json = {error:'', result:{}};

    let idProfissional = req.params.id;
    let nomeProfissional = req.body.nomeProfissional;
    let nomeSocial = req.body.nomeSocial;
    let cpf = req.body.cpf;
    let dataNascimento = req.body.dataNascimento;
    let nroEndereco = req.body.nroEndereco;
    let complementoEndereco = req.body.complementoEndereco;
    let idEndereco = 1;
    let idRaca = req.body.raca;
    let idGenero = req.body.genero;
    let idTime = 1;
    let idEspecialidade = req.body.especialidade;

    if(nomeProfissional && cpf && dataNascimento && nroEndereco && idEndereco && idRaca && idGenero && idTime && idEspecialidade){
        await profissionalServices.alterarProfissional(idProfissional, nomeProfissional, nomeSocial, dataNascimento, nroEndereco, complementoEndereco, cep, idEndereco, idRaca, idGenero, idTime, idEspecialidade);
        json.result = {
            idProfissional,
            // add resto dos atributos
        };
    }else{
        json.error = 'Campos obrigatórios não enviados!';
    }

    res.json(json);
}

const excluirProfissional = async(req, res) => {
    let json = {error:'', result:{}};

    await profissionalServices.excluirProfissional(req.params.id);
    
    res.json(json);
}

module.exports = {
    listarProfissional,
    buscarProfissional,
    inserirProfissional,
    alterarProfissional,
    excluirProfissional,
};
const profissionalServices = require('../services/profissionalServices');
const especialidadeServices = require('../services/especialidadeServices');

const listarProfissional = async (req, res) => {
    let json = {error:'', result:[]};

    let profissionais = await profissionalServices.listarProfissional();

    for(let i in profissionais){
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
            raca: profissionais[i].raca,
            genero: profissionais[i].genero,
            nroEndereco: profissionais[i].nroEndereco,
            complementoEndereco: profissionais[i].complementoEndereco,
            cep: profissionais[i].cep,
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
            raca: profissional.raca,
            genero: profissional.genero,
            nroEndereco: profissional.nroEndereco,
            complementoEndereco: profissional.complementoEndereco,
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

    let nomeCompleto = req.body.nomeCompleto;
    let nomeSocial = req.body.nomeSocial;
    let cpf = req.body.cpf;
    let dataNascimento = req.body.dataNascimento;
    let raca = req.body.raca;
    let genero = req.body.genero;
    let nroEndereco = req.body.nroEndereco;
    let complementoEndereco = req.body.complementoEndereco;
    let idEndereco = req.body.idEndereco;
    // checar se endereço indicado já existe no banco, se não existir, cadastra primeiro e depois insere o profissional
    let idTime = req.body.idTime;
    let idEspecialidade = req.body.idEspecialidade;

    if(nomeCompleto && cpf && dataNascimento && raca && genero && nroEndereco && idEndereco && idTime && idEspecialidade){
        let idProfissional = await profissionalServices.inserirProfissional(nomeCompleto, nomeSocial, cpf, dataNascimento, raca, genero, nroEndereco, complementoEndereco, idEndereco, idTime, idEspecialidade);
        json.result = {
            idProfissional: idProfissional,
            nomeCompleto,
            nomeSocial,
            cpf,
            dataNascimento,
            raca,
            genero,
            nroEndereco,
            complementoEndereco,
            idTime,
            //esperar integrar com feature/time
            idEspecialidade,
        };
    }else{
        json.error = 'Campos obrigatórios não enviados!';
    }
    res.json(json);
}

const alterarProfissional = async(req, res) => {
    let json = {error:'', result:{}};

    let idProfissional = req.params.id;
    let nomeCompleto = req.body.nomeCompleto;
    let nomeSocial = req.body.nomeSocial;
    let cpf = req.body.cpf;
    let dataNascimento = req.body.dataNascimento;
    let raca = req.body.raca;
    let genero = req.body.genero;
    let nroEndereco = req.body.nroEndereco;
    let complementoEndereco = req.body.complementoEndereco;
    let idEndereco = req.body.idEndereco;
    let idTime = req.body.idTime;
    let idEspecialidade = req.body.idEspecialidade;

    if(nomeCompleto && cpf && dataNascimento && raca && genero && nroEndereco && idEndereco && idTime && idEspecialidade){
        await profissionalServices.alterarProfissional(idProfissional, nomeCompleto, nomeSocial, cpf, dataNascimento, raca, genero, nroEndereco, complementoEndereco, idEndereco, idTime, idEspecialidade);
        json.result = {
            idProfissional,
            nomeCompleto,
            nomeSocial,
            cpf,
            dataNascimento,
            raca,
            genero,
            nroEndereco,
            complementoEndereco,
            idTime,
            //esperar integrar com feature/time
            idEspecialidade,
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
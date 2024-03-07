const projetoServices = require('../services/projetoServices');


const listarProjetos = async (req, res) => {
    let json = {error:'', result:[]};

    let projetos = await projetoServices.listarProjetos();

    for(let i in projetos){
        json.result.push({
            idProjeto: projetos[i].idProjeto,
            nomeProjeto: projetos[i].nomeProjeto,
            objetivo: projetos[i].objetivo,
            dataInicio: projetos[i].dataInicio,
            dataTermino: projetos[i].dataTermino,
            valor: projetos[i].valor,
            //falta cliente e time que precisam buscar depois.
        });
    }  
    res.json(json);
}

const buscarTime = async (req, res) => {
    let json = { error: '', result: {} };

    let idTime = req.params.id;
    let time = await projetoServices.buscarTime(idTime);
    
    console.log(time);

    if (time) {
        json.result = {
            idTime: time.idTime,
            nomeTime: time.nomeTime,
        };
    }
    res.json(json);
}

const inserirTime = async(req, res) => {
    let json = {error:'', result:{}};

    let nomeTime = req.body.nomeTime;
    console.log("Nome do time: " + nomeTime);

    if(nomeTime){
        let idTime = await projetoServices.inserirTime(nomeTime);
        json.result = {
            idTime: idTime,
            nomeTime: nomeTime,
        };
    }else{
        json.error = 'Campos obrigatórios não enviados!';
    }
    res.json(json);
}


const alterarTime = async(req, res) => {
    let json = {error:'', result:{}};

    let idTime = req.params.id;
    let nomeTime = req.body.nomeTime;

    if(nomeTime){
        await projetoServices.alterarTime(idTime, nomeTime);
        json.result = {
            idTime: idTime,
            nometime: nomeTime,
        };
    }else{
        console.log(nomeTime);
        json.error = 'Campos obrigatórios não enviados!';
    }
    res.json(json);
}

const excluirTime = async(req, res) => {
    let json = {error:'', result:{}};

    await projetoServices.excluirTime(req.params.id);
    
    res.json(json);
}

module.exports = {
    listarTimes: listarProjetos,
    buscarTime,
    inserirTime,
    alterarTime,
    excluirTime
};
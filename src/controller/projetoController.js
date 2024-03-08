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

const buscarProjeto = async (req, res) => {
    let json = { error: '', result: {} };

    let idProjeto = req.params.id;
    let projeto = await projetoServices.buscarProjeto(idProjeto);
    
    console.log(projeto);

    if (projeto) {
        json.result = {
            idProjeto: projeto.idProjeto,
            nomeProjeto: projeto.nomeProjeto,
            objetivo: projeto.objetivo,
            dataInicio: projeto.dataInicio,
            dataTermino: projeto.dataTermino,
            valor: projeto.valor,
        };
    }
    res.json(json);
}

const inserirProjeto = async(req, res) => {
    let json = {error:'', result:{}};

    let nomeProjeto = req.body.nomeProjeto;
    let objetivo = req.body.objetivo;
    let dataInicio = req.body.dataInicio;
    let dataTermino = req.body.dataTermino;
    let valor = req.body.valor;
    let idCliente = req.body.idCliente;
    let idTime = req.body.idTime;

    console.log(nomeProjeto);
    console.log(objetivo);
    console.log(dataInicio);
    console.log(dataTermino);
    console.log(valor);
    console.log(idCliente);
    console.log(idTime);
    
    if(nomeProjeto && objetivo && dataInicio && dataTermino && valor && idCliente && idTime){
        let idProjeto = await projetoServices.inserirProjeto(nomeProjeto,objetivo,dataInicio,dataTermino,valor,idCliente,idTime);
        json.result = {
            idProjeto: idProjeto,
            nomeProjeto,
            objetivo,
            dataInicio,
            dataTermino,
            valor,
            idCliente,
            idTime
        };
    }else{
        json.error = 'Campos obrigatórios não enviados!';
    }
    res.json(json);
}


const alterarProjeto = async(req, res) => {
    let json = {error:'', result:{}};

    let idProjeto = req.params.id;
    let nomeProjeto = req.body.nomeProjeto;
    let objetivo = req.body.objetivo;
    let dataInicio = req.body.dataInicio;
    let dataTermino = req.body.dataTermino;
    let valor = req.body.valor;
    let idCliente = req.body.idCliente;
    let idTime = req.body.idTime;

    console.log(nomeProjeto);
    console.log(objetivo);
    console.log(dataInicio);
    console.log(dataTermino);
    console.log(valor);
    console.log(idCliente);
    console.log(idTime);

    if(nomeProjeto && objetivo && dataInicio && dataTermino && valor && idCliente && idTime){
        await projetoServices.alterarProjeto(idProjeto, nomeProjeto,objetivo,dataInicio,dataTermino,valor,idCliente,idTime);
        json.result = {
            idProjeto,
            nomeProjeto,
            objetivo,
            dataInicio,
            dataTermino,
            valor,
            idCliente,
            idTime
        };
    }else{
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
    listarProjetos,
    buscarProjeto,
    inserirProjeto,
    alterarProjeto,
    excluirTime
};
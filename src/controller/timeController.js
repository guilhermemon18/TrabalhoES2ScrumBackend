const timeServices = require('../services/timeServices');


const listarTimes = async (req, res) => {
    let json = {error:'', result:[]};

    let times = await timeServices.listarTimes();

    for(let i in times){
        json.result.push({
            idTime: times[i].idTime,
            nomeTime: times[i].nomeTime,
        });
    }  
    res.json(json);
}

const buscarTime = async (req, res) => {
    let json = { error: '', result: {} };

    let idTime = req.params.id;
    let time = await timeServices.buscarTime(idTime);
    
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
        let idTime = await timeServices.inserirTime(nomeTime);
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
        await timeServices.alterarTime(idTime, nomeTime);
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

    await timeServices.excluirTime(req.params.id);
    
    res.json(json);
}

module.exports = {
    listarTimes,
    buscarTime,
    inserirTime,
    alterarTime,
    excluirTime
};
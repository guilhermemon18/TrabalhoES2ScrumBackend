const timeServices = require('../services/timeServices');

const buscarTime = async (req, res) => {
    let json = { error: '', result: {} };

    let idTime = req.params.idTime;
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

module.exports = {
    buscarTime,
    inserirTime
};
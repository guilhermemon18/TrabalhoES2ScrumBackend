const logradouroServices = require('../services/logradouroServices');

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

const inserirLogradouro = async(req, res) => {
    let json = {error:'', result:{}};

    let logradouro = req.body.logradouro;

    if(logradouro){
        if(!buscarLogradouro()) {
            let idLogradouro = await logradouroServices.inserirLogradouro();
            json.result = {
                idLogradouro: idLogradouro,
                logradouro,
            };
        }
    }else{
        json.error = 'Campos obrigatórios não enviados!';
    }
    res.json(json);
}

const buscarIdLogradouro = async (req, res) => {
    let json = { error: '', result: {} };

    let nomeLogradouro = req.params.nomeLogradouro;
    let logradouro = await logradouroServices.buscarIdLogradouro(nomeLogradouro);
    
    console.log();

    if (logradouro) {
        json.result = {
            idLogradouro: logradouro.idLogradouro,
            logradouro: logradouro.logradouro,
        };
    }
    res.json(json);
}

module.exports = {
    buscarLogradouro,
    inserirLogradouro,
    buscarIdLogradouro,
};
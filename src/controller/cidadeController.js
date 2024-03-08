const cidadeServices = require('../services/cidadeServices');

const buscarCidade = async (req, res) => {
    let json = { error: '', result: {} };

    let idCidade = req.params.idCidade;
    let cidade = await cidadeServices.buscar(idCidade);
    
    console.log();

    if (cidade) {
        json.result = {
            idCidade: cidade.idCidade,
            cidade: cidade.cidade,
        };
    }
    res.json(json);
}

const inserirCidade = async(req, res) => {
    let json = {error:'', result:{}};

    let cidade = req.body.cidade;

    if(cidade){
        if(!buscarCidade()) {
            let idCidade = await cidadeServices.inserirCidade();
            json.result = {
                idCidade: idCidade,
                cidade,
            };
        }
    }else{
        json.error = 'Campos obrigatórios não enviados!';
    }
    res.json(json);
}

module.exports = {
    buscarCidade,
    inserirCidade,
};
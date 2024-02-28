const testeServices = require('../services/testeServices');

const listar = async (req, res) => {
    let json = {error:'', result:[]};

    let testes = await testeServices.listar();


    for(let i in testes){
        json.result.push({
            idTesteProfissional: testes[i].idTesteProfissional,
            nomeTesteProfissional: testes[i].nomeTesteProfissional,
            nascimentoTesteProfissional: testes[i].nascimentoTesteProfissional
        });
    }

    res.json(json);
}

module.exports = {
    listar
}
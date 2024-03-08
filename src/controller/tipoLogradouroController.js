const tipoLogradouroServices = require('../services/tipoLogradouroServices');

const buscarTipoLogradouro = async (req, res) => {
    let json = { error: '', result: {} };

    let idTipoLogradouro = req.params.idTipoLogradouro;
    let tipoLogradouro = await tipoLogradouroServices.buscar(idTipoLogradouro);
    
    console.log();

    if (tipoLogradouro) {
        json.result = {
            tipoLogradouro: tipoLogradouro.idTipoLogradouro,
            tipoLogradouro: tipoLogradouro.tipoLogradouro,
        };
    }
    res.json(json);
}

const inserirTipoLogradouro = async(req, res) => {
    let json = {error:'', result:{}};

    let tipoLogradouro = req.body.tipoLogradouro;

    if(tipoLogradouro){
        if(!buscarTipoLogradouro()) {
            let idTipoLogradouro = await tipoLogradouroServices.inserirTipoLogradouro();
            json.result = {
                idTipoLogradouro: idTipoLogradouro,
                tipoLogradouro,
            };
        }
    }else{
        json.error = 'Campos obrigatórios não enviados!';
    }
    res.json(json);
}

module.exports = {
    buscarTipoLogradouro,
    inserirTipoLogradouro,
};
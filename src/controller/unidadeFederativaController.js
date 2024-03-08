const unidadeFederativaServices = require('../services/unidadeFederativaServices');

const buscarUnidadeFederativa = async (req, res) => {
    let json = { error: '', result: {} };

    let idUnidadeFederativa = req.params.idUnidadeFederativa;
    let unidadeFederativa = await unidadeFederativaServices.buscar(idUnidadeFederativa);
    
    console.log();

    if (unidadeFederativa) {
        json.result = {
            idUnidadeFederativa: unidadeFederativa.idUnidadeFederativa,
            unidadeFederativa: unidadeFederativa.unidadeFederativa,
            siglaUnidadeFederativa: unidadeFederativa.siglaUnidadeFederativa,
        };
    }
    res.json(json);
}

module.exports = {
    buscarUnidadeFederativa,
};
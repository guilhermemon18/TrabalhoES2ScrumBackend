const racaServices = require('../services/racaServices');

const listarRaca = async (req, res) => {
    let json = {error:'', result:[]};

    let racas = await racaServices.listarRaca();

    for(let i in racas){
        json.result.push({
            idRaca: racas[i].idRaca,
            raca: racas[i].raca,
        });
    }
    res.json(json);
}

module.exports = {
    listarRaca,
};
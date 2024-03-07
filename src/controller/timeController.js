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

module.exports = {
    buscarTime,
};
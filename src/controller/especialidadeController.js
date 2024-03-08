const especialidadeServices = require('../services/especialidadeServices');

const listarEspecialidade = async (req, res) => {
    let json = {error:'', result:[]};

    let especialidades = await especialidadeServices.listarEspecialidade();

    for(let i in especialidades){
        json.result.push({
            idEspecialidade: especialidades[i].idEspecialidade,
            tipoEspecialidade: especialidades[i].tipoEspecialidade,
            siglaEspecialidade: especialidades[i].siglaEspecialidade,
        });
    }
    res.json(json);
}

module.exports = {
    listarEspecialidade,
};
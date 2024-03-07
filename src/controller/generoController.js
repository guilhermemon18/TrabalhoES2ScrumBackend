const generoServices = require('../services/generoServices');

const listarGenero = async (req, res) => {
    let json = {error:'', result:[]};

    let generos = await generoServices.listarGenero();

    for(let i in generos){
        json.result.push({
            idGenero: generos[i].idGenero,
            genero: generos[i].genero, 
        });
    }
    res.json(json);
}

module.exports = {
    listarGenero,
};
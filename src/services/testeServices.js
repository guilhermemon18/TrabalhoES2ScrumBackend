const db = require('../database/dbConfig');

const listar = () => {
    return new Promise((aceito, rejeitado) => {
        db.query('SELECT * FROM TesteProfissional', (error, results) => {
            if(error) {rejeitado(error); return;}
            aceito(results);
        });
    });
}

module.exports = {
    listar
};
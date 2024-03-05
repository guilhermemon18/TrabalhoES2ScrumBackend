require("dotenv").config({ path: "variaveis.env" });

const mysql = require("mysql2");
const util = require("util");

console.log("HOST: ", process.env.DB_HOST);

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: "3306",
});

connection.getConnection((error, connection) => {
  if (error) {
    console.log(error);
    return error;
  } else {
    console.log(`Conectando ao Banco de dados: ${process.env.DB_NAME}`);
    if (connection) connection.release();
    return;
  }
});

connection.query = util.promisify(connection.query);

module.exports = connection;

const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

/*  cria um pool de conexão. Busca o host, user e password
    de variáveis de ambiente do sistema operacional
*/

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

module.exports = connection;

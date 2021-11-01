var mysql = require('mysql');
var util = require('util');

console.log(process.env.MYSQL_HOST,process.env.MYSQL_USER,process.env.MYSQL_PASSWORD,process.env.MYSQL_DATABASE)

var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    // password: 'R+D@11',
    database: process.env.MYSQL_DATABASE,
})

console.log(pool.config.connectionConfig.host,pool.config.connectionConfig.user,pool.config.connectionConfig.password,pool.config.connectionConfig.database)
pool.query = util.promisify(pool.query);

module.exports = pool;
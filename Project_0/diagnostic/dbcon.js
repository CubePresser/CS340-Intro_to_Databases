var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_jonesjon',
  password        : '9446',
  database        : 'cs340_jonesjon'
});

module.exports.pool = pool;

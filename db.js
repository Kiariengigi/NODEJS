const mysql = require('mysql2/promise'); 
const db = mysql.createPool({ 
host: 'localhost', 
user: 'root', 
password: 'Pwaweru@@4',
database: 'usiu_form', 
}); 
module.exports = db; 
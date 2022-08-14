const mysql = require('mysql');

var pool = mysql.createPool({    
    "port": 3306,
    "driver": "MySQL",
    "database": "agenda_db",
    "user": "root",
    "password": "qwerty",
    "name": "db"    
});

exports.pool = pool;
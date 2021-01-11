const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "jroverby92",
    password: "aMinhaSenha"
});

conn.connect(err=>{
    if (err) throw err;
    console.log("Connected!");
});
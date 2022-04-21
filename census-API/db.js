const mysql = require('mysql');

const con = mysql.createConnection({
    host: "census.ck3hs2nbqdil.ap-southeast-2.rds.amazonaws.com",
    user: "admin",
    password: "password",
    database:'census',
    port:3306
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
module.exports=con;
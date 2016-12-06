var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "11Aliluca13",
  database: "test"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
  }
  else
  	console.log('Connection established');
});

module.exports = con;
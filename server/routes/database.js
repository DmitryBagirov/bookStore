const mysql = require('mysql');

const db =  mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "book_store"
});

db.connect(function(err) {
	if (err) console.log("Error connection!");
});

module.exports = db;
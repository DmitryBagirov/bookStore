const mysql = require('mysql');

const db =  mysql.createConnection({
	host: "superbookstore.ml",
	user: "root",
	password: "Qweqweqwe123",
	database: "book_store"
});

db.connect(function(err) {
	if (err) console.log("Error connection!");
});

module.exports = db;

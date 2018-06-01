const mysql = require('mysql');

const db =  mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Qweqweqwe123",
	database: "book_store"
});

db.connect(function(err) {
	if (err) console.log(err);
});

module.exports = db;

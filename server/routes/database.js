const mysql = require('mysql');

const db =  mysql.createConnection({
	host: "185.159.131.11",
	user: "root",
	password: "Qweqweqwe123",
	database: "book_store"
});

db.connect(function(err) {
	if (err) console.log(err);
});

module.exports = db;

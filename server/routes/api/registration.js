const router = require('express').Router();
const db = require('../database');
const jwt = require('jsonwebtoken');

function format(format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined' ? args[number] : match;
	});
};
	
router.post('/', function (req, res) {
	let login = req.body.login,
		password = req.body.password,
		email = req.body.email;
	db.query(format('select * from user where login like "{0}"', login), function(err, result) {
		if (result.length > 0) {
			res.json({status: 1});
		} else {
			let date = new Date().toJSON().slice(0,10);
			db.query(format('insert into user(login, password, email, register_date, token) values("{0}","{1}","{2}","{3}","{4}")',
				login, password, email, date, null), function (err, result) {
				if (err) {
					res.json({status: 2});
				} else {
					res.json({status: 0});
				}
			});
		}
	});
});

module.exports = router;
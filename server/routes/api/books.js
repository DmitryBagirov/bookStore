const router = require('express').Router();
const db = require('../database');
const jwt = require('jsonwebtoken');
   
function ensureAuthorized(req, res, next) {
    let bearerToken;
    let bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        let bearer = bearerHeader.split(" ");
		let login = req.body.login;
        bearerToken = bearer[1];
		jwt.verify(bearerToken, process.env.JWT_SECRET, function(err, decoded) {
			if (err) {
				res.json({expired: true, err: err});
				return;
			}
			next();
		});
    } else {
        res.sendStatus(401);
    }
}

router.get('/', function (req, res) {
	db.query('select * from book', function (err, result) {
		res.send(result);
	});
});

//router.post('/:id', ensureAuthorized, function (req, res) {
router.post('/:id', function (req, res) {
	if (isNaN(req.params.id )) {
		res.json({error: 'Код книги должен быть числом'});
		return;
	}

	db.query('select * from book where id = ' + req.params.id, function (err, result) {
		if (result) {
			res.json({book: result});
		} else {			
			res.json({error: 'Такой книги не существует'});
		}
	});
});

router.post('/', function (req, res) {
	if (req.body.searchQuery){
		db.query('select * from book where ' + req.body.column + ' like "%'+req.body.searchQuery+'%"', function (err, result) {
			if (result) {
				res.json(result);
			} else {			
				res.json({error: err});
			}
		});
	} else {			
		res.json({error: 'Такой книги не существует'});
	}
});

module.exports = router;

const router = require('express').Router();
const db = require('../database');
const jwt = require('jsonwebtoken');

function format(format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined' ? args[number] : match;
	});
};

router.post('/', function(req, res) {
	let login = req.body.login,
		password = req.body.password;
    db.query(format('select * from user where login like "{0}" and password like "{1}"', login, password), function(err, user) {
        if (err) {
            res.json({
                status: 1
            });
        } else {
            if (user.length > 0) {
			token = jwt.sign({login:login, password:password}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
			db.query(format('update user set token="{0}"',token));
               res.json({
					status: 0,
                    user: {
						login: user[0].login,
						email: user[0].email
 					},
                    token: token,
					expire: process.env.JWT_EXPIRE
                }); 
            } else {
                res.json({
                    status: 2
                });    
            }
        }
    });
});

module.exports = router;
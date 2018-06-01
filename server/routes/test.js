const router = require('express').Router();

router.get('/*', function (req, res) {
	console.log("get");
	return res.redirect('https://vk.com/');
});

router.post('/', function (req, res) {
	console.log("post");
});

module.exports = router;
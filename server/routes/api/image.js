const router = require('express').Router();
const db = require('../database');
const jwt = require('jsonwebtoken');

function format(format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined' ? args[number] : match;
	});
}
router.get('/:image', function (req, res) {
	res.sendFile(__dirname+'/images/'+req.params.image);		
});

module.exports = router;
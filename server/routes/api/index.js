var router = require('express').Router();

// register api-controllers
router.use('/books', require('./books'));
router.use('/registration', require('./registration'));
router.use('/login', require('./login'));
router.use('/images', require('./image'));

module.exports = router;
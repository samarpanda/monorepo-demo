var router = require('express').Router();

// Mount routers
router.use('/sample', require('./sample/routes'));

module.exports = router;

const router = require('express').Router();
const usersRouter = require('./user.routes');

router.use('/users', usersRouter);

module.exports = router;
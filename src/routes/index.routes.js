const router = require('express').Router();
const usersRouter = require('./user.routes');
const animalsRouter = require('./animal.routes');

router.use('/users', usersRouter);
router.use ('/animals', animalsRouter)

module.exports = router;
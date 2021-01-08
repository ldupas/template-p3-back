const router = require('express').Router();
const albumRouter = require('./album.routes.js');
const trackRouter = require('./track.routes.js');
const userRouter = require('./user.routes.js');

router.use('/album', albumRouter);
router.use('/track', trackRouter);
router.use('/user', userRouter);

module.exports = router;
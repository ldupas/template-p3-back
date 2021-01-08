const router = require('express').Router();
const adminRouter = require('./admin.routes.js');
const albumRouter = require('./album.routes.js');
const tracksRouter = require('./track.routes.js')

router.use('/admins', adminRouter);
router.use('/albums', albumRouter);
router.use('/tracks', tracksRouter);
module.exports = router;
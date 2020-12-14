const router = require('express').Router();
const adminRouter = require('./admin.routes.js');

router.use('/admins', adminRouter);

module.exports = router;
const router = require('express').Router();
const animalsRouter = require('./animal.routes');
const productsRouter = require('./product.routes');

router.use ('/animals', animalsRouter);
router.use('/products', productsRouter);

module.exports = router;

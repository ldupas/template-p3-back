const router = require("express").Router();
const usersRouter = require("./user.routes");
const heroesRouter = require("./hero.routes");

router.use("/users", usersRouter);
router.use("/heroes", heroesRouter);

module.exports = router;

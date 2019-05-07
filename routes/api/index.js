const router = require("express").Router();
const jamsterRouter = require("./jamster");

router.use("/jamster", jamsterRouter);

module.exports = router;
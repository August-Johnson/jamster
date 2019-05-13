const router = require("express").Router();
const jamsterRouter = require("./jamster");

// continues the '/api' route with '/jamster' and uses the routes from the jamster.js file that includes all the GET and POST routes etc.
// Route at this point is '/api/jamster'.
router.use("/jamster", jamsterRouter);

module.exports = router;
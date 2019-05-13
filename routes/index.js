const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// route starts with '/api' and uses the routes from the api.js file.
// Route at this point is '/api/
router.use("/api", apiRoutes);

router.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build.index.html"))
});

module.exports = router;
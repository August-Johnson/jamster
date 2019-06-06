const router = require("express").Router();
const allControllers = require("../../controllers/allControllers");

// Routes relating to user data
router.route("/login")
    // Route for user login
    .post(allControllers.userLogin)

// ------------------------------------------------ //

router.route("/createNewUser")
    // Route for creating a new user
    .post(allControllers.createNewUser)

// ------------------------------------------------ //

router.route("/getUsername")
    .post(allControllers.getUserName)

// ------------------------------------------------ //

// Routes relating to sessions data

// Route for finding jam sessions
router.route("/findSessions")
    .post(allControllers.getJamSessions)

// Route for creating a jam session
router.route("/createSession")
    .post(allControllers.createNewSession)

// Route for joining a jam session
router.route("/joinSession")
    .put(allControllers.joinSession)

// ------------------------------------------------ //

// Routes relating to single session data, with req.params.id
router.route("/sessions/:id")
    // Route for viewing a single sessions (when user clicks on one to view details)
    .get(allControllers.viewJamSession)

// Route for updating a session

// ------------------------------------------------ //

module.exports = router;
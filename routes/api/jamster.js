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

// Routes relating to sessions data
router.route("/sessions")
    // Route for getting all sessions
    .get(allControllers.getJamSessions)

    // Route for creating a session
    .post(allControllers.createNewSession)

// ------------------------------------------------ //

// Routes relating to single session data, with req.params.id
router.route("/sessions/:id")
    // Route for viewing a single sessions (when user clicks on one to view details)
    .get(allControllers.viewJamSession)

    // Route for updating a session
    .put(allControllers.joinSession)

// ------------------------------------------------ //

module.exports = router;
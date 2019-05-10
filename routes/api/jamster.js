const router = require("express").Router();
const allControllers = require("../../controllers/allControllers");

// Routes relating to user data
router.route("/user")
    // Route for user login
    .get(allControllers.userLogin)

    // Route for creating a new user
    .post(allControllers.userCreate)

// ------------------------------------------------ //

// Routes relating to sessions data
router.route("/sessions")
    // Route for getting all sessions
    .get(allControllers.getSessions)

    // Route for creating a session
    .post(allControllers.createSession)

// ------------------------------------------------ //

// Routes relating to single session data, with req.params.id
router.route("/sessions/:id")
    // Route for viewing a single sessions (when user clicks on one to view details)
    .get(allControllers.viewSession)

    // Route for updating a session
    .put(allControllers.editSession)


module.exports = router;
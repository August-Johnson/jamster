import axios from "axios";

export default {
    // login call
    userLogin: function (usernameData) {
        // I think it's a POST request since we need to access what the user entered into the fields.
        return axios.get("/api/jamster/login", usernameData);
    },
    // create account call
    createNewUser: function (createUserData) {
        return axios.post("/api/jamster/createNewUser", createUserData);
    },
    // find sessions call
    findSessions: function () {
        return axios.get("/api/jamster/sessions");
    },
    // create a session call
    createNewSession: function () {
        return axios.post("/api/jamster/createSession");
    },
    // get user info for myProfile
    getMyInfo: function (userId) {
        return axios.get("/api/jamster/users/" + userId);
    },
    // get session info
    getSessionInfo: function (sessionId) {
        return axios.get("/api/jamster/sessions/" + sessionId);
    }
}
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
    getJamSessions: function () {
        return axios.get("/api/jamster/sessions");
    },
    // create a session call
    createNewSession: function () {
        return axios.post("/api/jamster/createSession");
    },
    // get session info
    viewJamSession: function (sessionId) {
        return axios.get("/api/jamster/sessions/" + sessionId);
    },
    // joining a jam session
    joinSession: function(sessionId, joiningUserData) {
        return axios.put("/api/jamster/sessions/" + sessionId, joiningUserData)
    },
    // get user info for myProfile
    getMyInfo: function (username) {
        return axios.get("/api/jamster/userInfo", username);
    }
}
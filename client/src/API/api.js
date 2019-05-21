import axios from "axios";

export default {
    // login call
    userLogin: function (usernameData) {
        // I think it's a POST request since we need to access what the user entered into the fields.
        return axios.post("/api/jamster/login", usernameData);
    },
    // create account call
    createNewUser: function (createUserData) {
        return axios.post("/api/jamster/createNewUser", createUserData);
    },
    // find sessions call
    getJamSessions: function () {
        return axios.get("/api/jamster/sessions");
    },
    getUserName: function(userId) {
        return axios.post("/api/jamster/getUsername", userId);
    },
    // create a session call
    createNewSession: function (createSessionData) {
        return axios.post("/api/jamster/sessions", createSessionData);
    },
    // get session info
    viewJamSession: function (sessionId) {
        return axios.get("/api/jamster/sessions/" + sessionId);
    },
    // joining a jam session
    joinSession: function(joiningUserData) {
        return axios.put("/api/jamster/sessions", joiningUserData);
    }
}
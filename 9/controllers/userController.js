const userModel = require("../models/userModel");

function getUser(req, res) {

    const user = userModel.getUserData();

    res.json(user);

}

module.exports = {
    getUser
};
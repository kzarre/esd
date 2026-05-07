const express = require("express");

const app = express();

const userController = require("./controllers/userController");

app.use(express.static("views"));

app.get("/user", userController.getUser);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mockUserData = [
    { id: 1, name: "Mark" },
    { id: 2, name: "Jill" },
];
app.get("/users/:id", function (req, res) {
    res.json({
        success: true,
        message: "successfully got users. Nice!",
        id: req.params.id,
        user: mockUserData.find((user) => user.id == req.params.id),
    });
});

app.get("/users", function (req, res) {
    res.json({
        success: true,
        message: "successfully got users. Nice!",
        id: req.params.id,
        users: mockUserData,
    });
});

app.post("/login", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "billyTheKid";
    const mockPassword = "superSecret";

    if (username === mockUsername && password === mockPassword) {
        res.json({
        success: true,
        message: "password and username match!",
        token: "encrypted token goes here",
        });
    } else {
        res.json({
        success: false,
        message: "password and username do not match",
        });
    }
});

app.listen(8000, function () {
    console.log("server is running");
});

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mockUserData = [{
        id: 1,
        name: "Mark"
    },
    {
        id: 2,
        name: "Jill"
    },
];
//added message and status
let testStatus = false;
const message = 'successfully got users. Nice!';
const status = true;

app.get("/users/:id", function (req, res) {
    if (mockUserData.find((user) => user.id == req.params.id)) {
        res.json({
            success: status,
            message: message,
            user: mockUserData.find((user) => user.id == req.params.id)
        });
    } else {
        id = req.params.id;
        res.json({
            success: testStatus,
            message: `Sorry user doesn't exist for the id ${id}`
        });
    }
});

app.get("/users", function (req, res) {
    res.json({
        success: status,
        message: message,
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
            success: status,
            message: "password and username match!",
            token: "encrypted token goes here",
        });
    } else {
        res.json({
            success: testStatus,
            message: "password and username do not match",
        });
    }
});

app.listen(8000, function () {
    console.log("server is running");
});
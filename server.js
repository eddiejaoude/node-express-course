const express = require("express");
const app = express();


app.use(express.json());

const mockUserData = new Map();
mockUserData.set(1, { id: 1, name: "Mark" });
mockUserData.set(2, { id: 2, name: "Jill" });

//Preprocess map to an array, so endpoint "/users" does not require computation. 
const mockUserDataArr = Array.from(mockUserData, ([key, value]) => {
    return { [key]: value };
});

//added message and status
let testStatus = false;
const message = 'successfully got users. Nice!';
const status = true;

app.get("/users/:id", function (req, res) {
    let userId = Number(req.params.id);

    if (mockUserData.has(userId)) {
        res.json({
            success: status,
            message: message,
            user: mockUserData.get(userId)
        });
    } else {
        res.json({
            success: testStatus,
            message: `Sorry user doesn't exist for the id ${userId}`
        });
    }
});

app.get("/users", function (req, res) {
    res.json({
        success: status,
        message: message,
        users: mockUserDataArr,
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
            message: "password and username do not match"
        });
    }
});

app.listen(8000, function () {
    console.log("server is running");
});
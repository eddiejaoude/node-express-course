const express = require("express");
const app = express();

const mockUserData = [
    { id: 1, name: "Mark" },
    { id: 2, name: "Jill" }
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

app.listen(8000, function () {
    console.log("server is running");
});

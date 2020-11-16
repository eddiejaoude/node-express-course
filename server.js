const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

let function_message = '';
let test_status = '';
const message = 'successfully got users. Nice!';
const status = true;

const mockUserData = [{
        id: 1,
        name: 'Mark'
    },
    {
        id: 2,
        name: 'Jill'
    }
];

app.get('/users/:id', function (req, res) {
    if (mockUserData.find((user) => user.id == req.params.id)) {
        res.json({
            status: status,
            message: message,
            user: mockUserData.find((user) => user.id == req.params.id)
        });
    } else {
        test_status = false;
        id = req.params.id;
        function_message = `Sorry user doesn't exist for the id ${id}`;
        res.json({
            status: test_status,
            message: function_message
        });
    }
});

app.get('/users', function (req, res) {
    res.json({
        status: status,
        message: message,
        id: req.params.id,
        users: mockUserData
    });
});

app.post('/login', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = 'billyTheKid';
    const mockPassword = 'superSecret';

    if (username === mockUsername && password === mockPassword) {
        function_message = 'password and username match!';
        res.json({
            status: status,
            message: function_message,
            token: 'encrypted token goes here'
        });
    } else {
        test_status = false;
        function_message = ' username and password do not match';
        res.json({
            status: test_status,
            message: function_message
        });
    }
});

app.listen(8000, function () {
    console.log('server is running');
});
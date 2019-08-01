const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const middleware = require('./middleware.js');

app.use(bodyParser.json())

const mockUserData=[
	{name:'Mark'},
	{name:'Jill'}
]

app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})
// colons are used as variables that be viewed in the params
app.get('/users/:id',function(req,res){
	console.log(req.params.id)
})

app.post('/login',function(req,res){
	// Typically passwords are encrypted using something like bcrypt before sending to database
	const username=req.body.username;
	const password=req.body.password;

	// This should come from the database
	const mockUsername="billyTheKid";
	const mockPassword="superSecret";

	if (username===mockUsername && password===mockPassword){
		// In practice, use JSON web token sign method here to make an encrypted token
		res.json({
			success: true,
			message: 'password and username match!',
			token: 'encrypted token goes here'
		})
	} else {
		res.json({
			success: false,
			message: 'password and username do not match'
		})
	}

})
// admin route is protected by checking token in middleware
app.get('/admin',middleware.checkToken,function(req,res){

	res.json({
		success:true,
		message:'admin authorized',
		adminData: 'secure data from database'
	})

})

app.listen(8000,function(){console.log('server is listening')})

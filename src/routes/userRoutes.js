const express = require("express");
const router = express.Router();
const passport = require("passport");
const {createUser} = require('../contoller/userController')

const User = require('../model/User');

router.post('/register', createUser)

router.post(
	"/login",
	passport.authenticate("local"),
	(request, response) => {
		response.sendStatus(200);
	}
);

router.get('/current', (req,res) =>{
    return req.user ? res.send(req.user) : res.sendStatus(401);
})

module.exports = router;
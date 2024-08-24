const express = require("express");
const router = express.Router();
const passport = require("passport");
const {createUser, logoutUser, currentUser} = require('../contoller/userController')

const User = require('../model/User');

router.post('/register', createUser)

router.post(
	"/login",
	passport.authenticate("local"),
	(request, response) => {
		response.sendStatus(200);
	}
);
router.post("/logout", logoutUser)
router.get('/current', currentUser)

module.exports = router;
const express = require("express");
const router = express.Router();
const passport = require("passport");
const {createUser, logoutUser, currentUser} = require('../contoller/userController')
const {isAuthenticated} = require('../Middelware/isAuthenticated')


router.post('/register', createUser)

router.post(
	"/login",
	passport.authenticate("local"),
	(request, response) => {
		response.sendStatus(200);
	}
);
router.post("/logout", logoutUser)
router.get('/current',isAuthenticated, currentUser)

module.exports = router;
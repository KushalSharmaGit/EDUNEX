const express = require("express");
const router = express.Router();
const passport = require("passport");
const {createCode} = require('../contoller/codeController')

const Code = require('../model/Code');


router.post(
	"/code-editor",
	passport.authenticate("local"),
	(request, response) => {
		response.sendStatus(200);
	}
);

router.get('/code-editor:{id}', (req,res) =>{
    return req.user ? res.send(req.user) : res.sendStatus(401);
})

module.exports = router;
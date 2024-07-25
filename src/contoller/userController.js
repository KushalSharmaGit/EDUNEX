const asyncHandler = require("express-async-handler");
const User = require('../model/User');
const {hashPassword} = require("../utils/helpers")

const createUser =asyncHandler ( async (req , res) =>{
    let { name, email, password}= req.body;
    if(!name || !email || !password){
        res.status(400);
        throw new Error("All fields are neccessary")
    }
    password = hashPassword(password);
    const user = await User.create({
        name,
        email,
        password,
    })
    res.status(201).json(user);
});


module.exports = {createUser};
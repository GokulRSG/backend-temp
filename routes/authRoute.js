const express = require("express");
const { createUser } = require("../controller/userController");
const router = require("express").Router();

router.post("/register", createUser);
module.exports = router;
// http://localhost:3000/api/users/register

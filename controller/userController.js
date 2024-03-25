// const { response } = require("express");
const user = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const finduser = await user.findOne({ email: email });
  if (!finduser) {
    const newUser = await user.create(req.body);
    res.json(newUser);
  } else {
    throw new Error("User Already Exists");
  }
});

module.exports = { createUser };

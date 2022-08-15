var env = 'development';
var express = require('express');
const { check, validationResult } = require("express-validator");
const router = express.Router();

const { registerUser, verifyOTP, login, updateUserDetails, getDetails } = require('./userController.js');

router.post("/register/candidate", registerUser);
router.post("/verify/candidate", verifyOTP);
router.post("/login", login);
router.post("/updateUserDetails", updateUserDetails);
router.post("/getDetails", getDetails);

module.exports = router;
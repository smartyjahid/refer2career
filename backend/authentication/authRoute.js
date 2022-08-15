var env = 'development';
var express = require('express');
const { check, validationResult } = require("express-validator");
const router = express.Router();

const { registerUser,getMails, verifyOTP, login, sendMail, create, updateAdminDetails, getDetails, update, find, insertOTP, verify } = require('./authController.js');

router.post("/register/candidate", registerUser);
router.post("/verify/candidate", verifyOTP);
router.post("/login", login);
router.post("/updateAdminDetails", updateAdminDetails);
router.post("/getDetails", getDetails);
router.post("/create", create);
router.post("/update", update);
router.post("/find", find);
router.post("/otpRequest", insertOTP);
router.post("/verifyOTP", verify);
router.post("/send-mail", sendMail);
router.post("/get-mails", getMails);

module.exports = router;
var env = 'development';
var express = require('express');
const { check, validationResult } = require("express-validator");
const router = express.Router();

const { registerOrganization, updateOrganization, getOrganization, getAllOrganizations } = require('./addOrganizationsDetails.js');

router.post("/add/organization", registerOrganization);
router.post("/update/organization", updateOrganization);
router.post("/getAll/orginations", getAllOrganizations);
router.post("/get/orgination", getOrganization);

module.exports = router;
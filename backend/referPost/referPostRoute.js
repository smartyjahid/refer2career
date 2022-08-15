var env = 'development';
var express = require('express');
const { check, validationResult } = require("express-validator");
const router = express.Router();

const { referJobPost, getReferedJobPosts, uploadResume, checkProfile } = require('./referPostDetails');

router.post("/referJobPost", referJobPost);
router.post("/getReferedJobPosts", getReferedJobPosts);
router.post("/upload-resume", uploadResume);
router.post("/check-refered-profile", checkProfile);

module.exports = router;
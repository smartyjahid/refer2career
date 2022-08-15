var env = 'development';
var express = require('express');
const { check, validationResult } = require("express-validator");
const router = express.Router();

const { addJobPost, updateJobPost, deleteJobPost, getAllJobPosts, getJobPostsByEmployer, getJobPosts, applyJobPost, appliedJobPosts} = require('./jobpostDetails');

router.post("/add/jobpost", addJobPost);
router.post("/update/jobpost", updateJobPost);
router.post("/getAll/jobposts", getAllJobPosts);
router.post("/get/jobpost", getJobPosts);
router.post("/delete/jobpost", deleteJobPost);
router.post("/apply/jobpost", applyJobPost);
router.post("/applied/jobposts", appliedJobPosts);
router.post("/employer/jobposts", getJobPostsByEmployer);

module.exports = router;
var env = "development";
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const users = require('../app.js');
var nodemailer = require('nodemailer');
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://pahuja_ji:1357902468@cluster0-shard-00-00.j00fc.mongodb.net:27017,cluster0-shard-00-01.j00fc.mongodb.net:27017,cluster0-shard-00-02.j00fc.mongodb.net:27017/insta-jobs?ssl=true&replicaSet=atlas-2a4jen-shard-0&authSource=admin&retryWrites=true&w=majority";
var mongoUtil = require('../db.js').getDb();

var ObjectId = require('mongodb').ObjectId;

module.exports.addJobPost = (req, res) => {
    const jobPost = req.body;
    mongoUtil.collection("jobposts").insertOne(jobPost, function (err, result) {
        if (err) res.status(200).json({ 'data': false });
        else res.status(201).json({ 'data': true });
    });

}

module.exports.updateJobPost = (req, res) => {
    const data = req.body;
    let d = { 'jobPost': data.jobPost };
    mongoUtil.collection("jobposts").updateOne({ '_id': new ObjectId(data._id) }, { $set: d }, function (err, result) {
        if (err) return res.status(200).json({ 'data': false });
        return res.status(200).json({ 'data': true });
    });
}

module.exports.deleteJobPost = (req, res) => {
    const data = req.body;
    mongoUtil.collection("jobposts").deleteOne({ _id: new ObjectId(data._id) }, function (err, result) {
        if (err) return res.status(200).json({ 'data': false });
        return res.status(200).json({ 'data': true });
    });

}

module.exports.getAllJobPosts = (req, res) => {
    mongoUtil.collection("jobposts").find().toArray(function (err, result) {
        if (err) return res.status(200).json({ 'data': false });
        return res.status(200).json({ 'data': result });
    });
}

module.exports.getJobPosts = (req, res) => {
    const data = req.body;
    mongoUtil.collection("jobposts").findOne({ '_id': new ObjectId(req.body.id) }, function (err, result) {
        if (err) return res.status(200).json({ 'data': false });
        return res.status(200).json({ 'data': result });
    });
}

module.exports.getJobPostsByEmployer = (req, res) => {
    const data = req.body;
    mongoUtil.collection("jobposts").find({ 'jobPost.createdBy': data._id }).toArray(function (err, result) {
        if (err) return res.status(200).json({ 'data': false });
        return res.status(200).json({ 'data': result });
    });
}

module.exports.getRecomendedJobPost = (req, res) => {
    const jobPost = req.body;

}

module.exports.applyJobPost = (req, res) => {
    const data = req.body;
    mongoUtil.collection("applyJob").insertOne(data, function (err, result) {
        if (err) res.status(200).json({ 'data': false });
        else res.status(201).json({ 'data': true });
    });
}

module.exports.appliedJobPosts = (req, res) => {
    const data = req.body;
    mongoUtil.collection("applyJob").find({ candidateId: data.candidateId }).toArray(function (err, result) {
        if (err) return res.status(200).json({ 'data': false });
        return res.status(200).json({ 'data': result });
    });
}


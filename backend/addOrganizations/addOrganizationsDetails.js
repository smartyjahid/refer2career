var env = "development";
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const users = require('../app.js');
var nodemailer = require('nodemailer');
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://pahuja_ji:1357902468@cluster0-shard-00-00.j00fc.mongodb.net:27017,cluster0-shard-00-01.j00fc.mongodb.net:27017,cluster0-shard-00-02.j00fc.mongodb.net:27017/insta-jobs?ssl=true&replicaSet=atlas-2a4jen-shard-0&authSource=admin&retryWrites=true&w=majority";
var mongoUtil = require('../db.js').getDb();


module.exports.registerOrganization = (req, res) => {
    const organization = req.body;
    mongoUtil.collection("users").findOne({ 'email': organization.email }, function (err, result) {
        if (err) throw err;
        if (result !== null && result.verified === true) {
            return res.status(200).json({ 'error': 'Email already registered' });
        }
        else {
            mongoUtil.collection("users").insertOne(organization, function (err, result) {
                if (err) res.status(200).json({ 'data': false });
                else {
                    res.status(201).json({ 'data': true });
                }
            });
        }
    });
}

module.exports.updateOrganization = (req, res) => {
    const data = req.body;
    mongoUtil.collection("users").updateOne({ 'email': data.email }, { $set: { personalDetails: data.personalDetails, organizationalDetails: data.organizationalDetails, email: data.email } }, function (err, result) {
        if (err) return res.status(200).json({ 'data': false });
        return res.status(200).json({ 'data': true });
    });
}

module.exports.getAllOrganizations = (req, res) => {
    const data = req.body;
    mongoUtil.collection("users").find({ 'role': 1 }).toArray(function (err, result) {
        if (err) return res.status(200).json({ 'data': false });
        return res.status(200).json({ 'data': result });
    });
}

module.exports.getOrganization = (req, res) => {
    const data = req.body;
    mongoUtil.collection("users").findOne({ 'email': data.email }, function (err, result) {
        if (err) return res.status(200).json({ 'data': false });
        return res.status(200).json({ 'data': result });
    });
}
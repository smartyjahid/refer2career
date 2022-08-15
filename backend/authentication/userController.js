var env = "development";
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const users = require('../app.js');
var nodemailer = require('nodemailer');
const { htmlPrefilter } = require("jquery");
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://pahuja_ji:1357902468@cluster0-shard-00-00.j00fc.mongodb.net:27017,cluster0-shard-00-01.j00fc.mongodb.net:27017,cluster0-shard-00-02.j00fc.mongodb.net:27017/insta-jobs?ssl=true&replicaSet=atlas-2a4jen-shard-0&authSource=admin&retryWrites=true&w=majority";
var mongoUtil = require('../db.js').getDb();
//var mdb = mongoUtil.getDb();

module.exports.registerUser = (req, res) => {
    const user = req.body.user;
    mongoUtil.collection("users").findOne({ 'email': user.email }, function (err, result) {
        if (err) throw err;
        if (result !== null && result.verified === true) {
            return res.status(200).json({ 'error': 'Email already registered' });
        }
        else {
            res.status(200).json({ 'data': true });
            let otp = Math.floor(100000 + Math.random() * 900000);
            mongoUtil.collection("verify").deleteMany({ 'email': user.email }, function (err, obj) {
                if (err) throw err;
                mongoUtil.collection("verify").insertOne({ 'email': user.email, 'otp': otp, 'time': new Date() }, function (err, res) {
                    if (err) throw err;
                    mongoUtil.collection("users").deleteMany({ 'email': user.email }, function (err, obj) {
                        if (err) throw err;
                        mongoUtil.collection("users").insertOne(user, function (err, res) {
                            if (err) throw err;
                            var smtpTransport = nodemailer.createTransport({
                                service: 'smtp.gmail.com',//smtp.gmail.com  //in place of service use host...
                                secure: true,//true
                                port: 465,//465
                                auth: {
                                    user: 'refer2careertest@gmail.com',
                                    pass: 'sxlnrycexdgzdhda'
                                }, tls: {
                                    rejectUnauthorized: false
                                }
                            });

                            var mailOptions = {
                                from: 'refer2careertest@gmail.com',
                                to: user.email,
                                subject: 'Verification code for Insta Jobs',
                                html: '<p>Hello ' + user.name + '</p><p>Here is your verification code for Insta jobs<br><br><h1>' + otp + '</h1><br><br><br><br><br><br>Thanks and Regards!'
                            };

                            smtpTransport.sendMail(mailOptions, function (error, info) {
                                if (error) {
                                    console.log(error);
                                } else {
                                    res.status(200).json({ 'data': true });
                                }
                            });
                        });
                    });
                });
            });
        }
    });
}


module.exports.verifyOTP = (req, res) => {
    const data = req.body;
    mongoUtil.collection("verify").findOne({ 'email': data.email }, function (err, result) {
        if (err) throw err;
        let date = new Date();
        let time = result.time;
        let msDifference = date - time;
        let minutes = Math.floor(msDifference / 1000 / 60);
        if (+data.otp === +result.otp) {
            if (minutes < 16) {
                mongoUtil.collection("verify").deleteOne({ 'email': data.email }, function (err, obj) {
                    if (err) throw err;
                });
                mongoUtil.collection("users").updateOne({ 'email': data.email }, { $set: { verified: true } }, function (err, res) {
                    if (err) throw err;
                });
                return res.status(200).json({ 'data': true });
            }
            else {
                return res.status(200).json({ 'data': false });
            }
        }
        else {
            return res.status(200).json({ 'error': 'Invalid passcode' });
        }
    });
}


module.exports.login = (req, res) => {
    const data = req.body;
    mongoUtil.collection("users").findOne({ 'email': data.email }, function (err, result) {
        if (err) throw err;
        if (result == null) {
            return res.status(200).json({ 'error': 'Invalid details' });
        }
        else {
            if (result.email) {
                if (data.password === result.password) {
                    return res.status(200).json(result);
                }
                else {
                    return res.status(200).json({ 'error': 'Invalid details' });
                }
            }
            else {
                return res.status(200).json({ 'error': 'Invalid details' });
            }
        }
    });
}

module.exports.updateUserDetails = (req, res) => {
    const data = req.body;
    mongoUtil.collection("users").updateOne({ 'email': data.email }, { $set: { mobile: data.mobile, alternateNumber: data.alternateNumber, photo: data.photo, organizationDetails: data.organizationDetails } }, function (err, result) {
        if (err) return res.status(200).json({ 'data': false });;
        return res.status(200).json({ 'data': true });
    });
}

module.exports.getDetails = (req, res) => {
    const data = req.body;
    mongoUtil.collection("users").findOne({ 'email': data.email }, function (err, result) {
        if (err) return res.status(200).json({ 'data': false });
        return res.status(200).json({ 'data': result });
    });
}
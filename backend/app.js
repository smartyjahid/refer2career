const express = require('express');
var mongoUtil = require('./db');
var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
var mongo;

mongoUtil.connectToServer(function (err, client) {
    if (err) console.log(err);
    // start the rest of your app here
    const AuthRoutes = require('./authentication/authRoute');
    const OrganizationRoutes = require('./addOrganizations/addOrganizationsRoute');
    const JobPostRoutes = require('./jobPosts/jobpostRoute');
    const ReferJobPostRoutes = require('./referPost/referPostRoute');
    app.use('/api', AuthRoutes);
    app.use('/api', OrganizationRoutes);
    app.use('/api', JobPostRoutes);
    app.use('/api', ReferJobPostRoutes);
    mongo = require('./db.js').getDb();
});

const bodyparser = require('body-parser');
const app = express();

const fileUpload = require("express-fileupload");
const cors = require("cors");
const { start } = require('repl');

app.use(bodyparser.text({ limit: '200mb' }));
app.use(cors());
app.use(fileUpload({
    createParentPath: true
}));
app.use(bodyparser.json({ limit: '50mb' }));
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(express.static("docs"));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

// sign in with linked in ----------

passport.use(new LinkedInStrategy({
    clientID: '78pijkn0197pgp',
    clientSecret: 'XL9shz8q217eF2BI',
    callbackURL: "https://refer2career.com/callback/",
    scope: ['r_emailaddress', 'r_liteprofile'],
}, function (accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
        // To keep the example simple, the user's LinkedIn profile is returned to
        // represent the logged-in user. In a typical application, you would want
        // to associate the LinkedIn account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
    });
}));

app.get('/linkedin',
    passport.authenticate('linkedin'),
    function (req, res) {
        // console.log(req);
    }
);
// callback method which linkedin will hit after successfull login of user
app.get('/callback/',
    passport.authenticate('linkedin', { failureRedirect: '/login' }),
    function (req, res) {
        let time = new Date().getTime();
        let user = {
            name: req.user.name.givenName + " " + req.user.name.familyName,
            email: req.user.emails[0].value,
            provider: req.user.provider,
            providerId: req.user.id,
            photo: req.user.photos[1].value,
            verified: true,
            role: 2,
        }
        mongo.collection("users").findOne({ 'email': user.email }, function (err, result) {
            if (err) throw err;
            if (result !== null) {
                const query = { 'email': user.email };
                mongo.collection("users").updateOne(query, { $set: user }, function (err, rep) {
                    if (err) throw err;
                    user = user.providerId;
                    res.redirect(`https://refer2career.com/login/linked-in-authentication-${time}
                    linked-in-authentication-${time}linked-in-authentication-${time}
                    linked-in-authentication-${time}linked-in-authentication-${time}
                    linked-in-authentication-${time}linked-in-authentication-${time}
                    linked-in-authentication-${time}/${user}`);
                });
            }
            else {
                mongo.collection("users").insertOne(user, function (err, rep) {
                    if (err) throw err;
                    user = user.providerId;
                    res.redirect(`https://refer2career.com/login/linked-in-authentication-${time}
                    linked-in-authentication-${time}linked-in-authentication-${time}
                    linked-in-authentication-${time}linked-in-authentication-${time}
                    linked-in-authentication-${time}linked-in-authentication-${time}
                    linked-in-authentication-${time}/${user}`);
                });
            }
        });

    });


//Sign in with Google -----------

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = '593137889627-c89jf8s7lii6r05ns466lt0lkkpvhog7.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = 'HFe2JkRt8oZZfIqNHOHmI2XA';
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "https://refer2career.com/google/callback/"
},
    function (accessToken, refreshToken, profile, done) {
        userProfile = profile;
        return done(null, userProfile);
    }
));

app.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }),
    function (req, res) {
        // Successful authentication, redirect success.
        //console.log(res);
    });

app.get('/google/callback/',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        console.log(req.user);
        let time = new Date().getTime();
        let user = {
            name: req.user.name.givenName + " " + req.user.name.familyName,
            email: req.user.emails[0].value,
            provider: req.user.provider,
            providerId: req.user.id,
            photo: req.user.photos[0].value,
            verified: true,
            role: 2,
        }
        mongo.collection("users").findOne({ 'email': user.email }, function (err, result) {
            if (err) throw err;
            if (result !== null) {
                const query = { 'email': user.email };
                mongo.collection("users").updateOne(query, { $set: user }, function (err, rep) {
                    if (err) throw err;
                    user = user.providerId;
                    res.redirect(`https://refer2career.com/login/google-authentication-${time}
                    google-authentication-${time}google-authentication-${time}
                    google-authentication-${time}google-authentication-${time}
                    google-authentication-${time}google-authentication-${time}
                    google-authentication-${time}/${user}`);
                });
            }
            else {
                mongo.collection("users").insertOne(user, function (err, rep) {
                    if (err) throw err;
                    user = user.providerId;
                    res.redirect(`https://refer2career.com/login/google-authentication-${time}
                    google-authentication-${time}google-authentication-${time}
                    google-authentication-${time}google-authentication-${time}
                    google-authentication-${time}google-authentication-${time}
                    google-authentication-${time}/${user}`);
                });
            }
        });
    });

app.get('/api/get-database', (req, res) => {
    return res.status(200).json({ 'data': true });
});




//login with facebook ------------------------------

const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: '537416687257101',
    clientSecret: 'cede02260273efbc8712d6c9c99323ea',
    callbackURL: 'https://instajobapp.herokuapp.com/facebook/callback/',
    profileFields: ['id', 'photos', 'emails', 'name']
}, function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
}
));


app.get('/facebook',
    passport.authenticate('facebook', { scope: ['email'] }),
    function (req, res) {
        // Successful authentication, redirect success.
        //console.log(res);
    });

app.get('/facebook/callback/',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function (req, res) {
        console.log(req.user);
        let time = new Date().getTime();
        let user = {
            name: req.user.name.givenName + " " + req.user.name.familyName,
            email: req.user.emails[0].value,
            provider: req.user.provider,
            providerId: req.user.id,
            photo: req.user.photos[0].value,
            verified: true,
            role: 2,
        }
        mongo.collection("users").findOne({ 'email': user.email }, function (err, result) {
            if (err) throw err;
            if (result !== null) {
                const query = { 'email': user.email };
                mongo.collection("users").updateOne(query, { $set: user }, function (err, rep) {
                    if (err) throw err;
                    user = user.providerId;
                    res.redirect(`https://refer2career.com/login/facebook-authentication-${time}
                    facebook-authentication-${time}facebook-authentication-${time}
                    facebook-authentication-${time}facebook-authentication-${time}
                    facebook-authentication-${time}facebook-authentication-${time}
                    facebook-authentication-${time}/${user}`);
                });
            }
            else {
                mongo.collection("users").insertOne(user, function (err, rep) {
                    if (err) throw err;
                    user = user.providerId;
                    res.redirect(`https://refer2career.com/login/facebook-authentication-${time}
                    facebook-authentication-${time}facebook-authentication-${time}
                    facebook-authentication-${time}facebook-authentication-${time}
                    facebook-authentication-${time}facebook-authentication-${time}
                    facebook-authentication-${time}/${user}`);
                });
            }
        });
    });

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
}
// Method to logout
app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});
// method to load index.ejs file on base path

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT,OPTIONS');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }

});
const router = express.Router();
module.exports = router;

module.exports = app;

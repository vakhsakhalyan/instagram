var express = require('express');
var url = require('url');
var router = express.Router();
var User = require('../../models/User');
var passport = require('passport');
var InstagramStrategy = require('passport-instagram').Strategy;
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});


// Use the InstagramStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Instagram
//   profile), and invoke a callback with a user object.
passport.use(new InstagramStrategy({
        clientID: 'f25859b1f5724a96a800216400ee8b92',
        clientSecret: 'b29f02f985d1472a85de07fe13bd8b48',
        callbackURL: "http://localhost:3000/instagram/api/v1/users/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        // asynchronous verification, for effect...
        process.nextTick(function () {

            // To keep the example simple, the user's Instagram profile is returned to
            // represent the logged-in user.  In a typical application, you would want
            // to associate the Instagram account with a user record in your database,
            // and return that user instead.
            return done(null, profile);
        });
    }
));

router.get('/', function(req, res) {
    User.getUsers(req.query).then(function (data) {
        res.send(200, data);
    });
});


router.get('/login', function(req, res) {
 res.send("ok");
});

router.get('/callback',
    passport.authenticate('instagram', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.send("ok");
    });

router.get('/loginInstagram',  passport.authenticate('instagram'), function(req, res) {
 res.send("ok");
});

module.exports = router;
const express = require('express');
const router = express.Router();
const passport = require('passport');
const keys = require('../config/keys');

//auth logout
router.get('/logout', (req, res) => {
    //handle with passport
    req.logout();
    res.send('logged out');
})

//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}), (req, res) => {
});

//callback
router.get('/google/redirect', passport.authenticate('google', {
    failureRedirect: '/'
}), (req, res) => {
    res.redirect(keys.frontEnd.URL);
})

//check if logged in
router.get('/me', (req, res) => {
    res.status(200).json(req.user);
})

module.exports = router;
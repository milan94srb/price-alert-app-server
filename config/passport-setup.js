const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user');

passport.use(new GoogleStrategy({
    //strategy options
    callbackURL: 'http://price-alert-app-2.herokuapp.com/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (token, refreshToken, profile, done) => {
    //passport callback function
    User.findOne({googleId: profile.id}).then((user) => {
        console.log(profile);
        if(user){
            console.log('user exists');
            done(null, user);
        }else{
            User.create({
                username: profile.displayName,
                googleId: profile.id
            }).then((newUser) => {
                console.log(newUser);
                done(null, newUser);
            });
        }
    })
}))

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});
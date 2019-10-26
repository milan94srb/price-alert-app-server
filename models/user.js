const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create btc schema and model
const UserSchema = new Schema({
    username: {
        type: String
    },
    googleId: {
        type: String
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create btc schema and model
const AlertSchema = new Schema({
    userId: {
        type: String
    },
    currency: {
        type: String
    },
    condition: {
        type: String
    },
    amount: {
        type: Number
    }
});

const Alert = mongoose.model('alert', AlertSchema);

module.exports = Alert;
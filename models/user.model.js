const mongoose = require('mongoose');

// User model
const UserSchema = mongoose.Schema({
    lastname: String,
    firstname: String,
    email: String,
    password: String,
    admin : Boolean,
    sudo : Boolean

}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);

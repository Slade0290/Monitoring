const mongoose = require('mongoose');

// User model
const UserSchema = mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    password: String

}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);

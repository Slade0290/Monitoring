const mongoose = require('mongoose');

// Example model
const ExampleSchema = mongoose.Schema({
    attribute : String
}, {
    timestamps: true
});

module.exports = mongoose.model('Example', ExampleSchema);

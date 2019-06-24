module.exports = (app) => {
    const data = require('../controllers/data.controller.js');

    // Retrieve all users
    app.get('/dashboard', data.findAll);

}

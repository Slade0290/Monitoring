module.exports = (app) => {
    const user = require('../controllers/user.controller.js');

    // Create a new user
    app.post('/register', user.create);

    // Login a user with login and password
    app.post('/authentification', user.login);

    // Retrieve all users
    app.get('/user-management', user.findAll);

    // Retrieve a single user with noteId
    app.get('/users/:id', user.findOne);

    // Update a user with userid
    app.put('/users/:id', user.update);

    // Delete a user with userid
    app.delete('/user-management/:id', user.delete);
}

module.exports = (app) => {
    const user = require('../controllers/user.controller.js');

    // Create a new user
    app.post('/register', user.create);

    // Login a user with login and password
    app.post('/authentification', user.login);

    // Retrieve all users
    app.get('/user-management', user.findAll);

    // Update a user with userid
    app.put('/user-management/admin/:id', user.updateAdmin);

    // Update a user with userid
    app.put('/user-management/sudo/:id', user.updateSudo);

    // Delete a user with userid
    app.delete('/user-management/:id', user.delete);

    // Session side
    app.get('/session', user.session);

    // Session side
    app.get('/profil', user.findOne);

    // Destroy session
    app.get('/user-logout', user.logout);
}

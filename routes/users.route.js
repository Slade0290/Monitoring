module.exports = (app) => {
    const user = require('../controllers/user.controller.js');

    // Create a new user
    app.post('/register', user.create);

    // Retrieve all users
    app.get('/user-management', user.findAll);

    // Retrieve a single user with noteId
    app.get('/user-management/:id', user.findOne);

    // Update a user with userid
    app.put('/user-management/admin/:id', user.updateAdmin);

    // Update a user with userid
    app.put('/user-management/sudo/:id', user.updateSudo);

    // Delete a user with userid
    app.delete('/user-management/:id', user.delete);
}

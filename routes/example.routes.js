module.exports = (app) => {
    const comment = require('../controllers/example.controllers.js');

    //Read all Example
    app.get('/example', example.findAll)

    // Create Example
    app.post('/example', example.comment_create);

    //Read Example
    app.get('/example/:id', example.findOne);

    // Update Example
    app.put('/example/:id', example.comment_update);
}

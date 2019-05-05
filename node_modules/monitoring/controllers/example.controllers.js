const Example = require('../models/example.models.js');
// CREATE ----------------------------------------------------------------------------

// EXAMPLE
exports.example_create = function (req, res) {
    const example = new Example(
        {
            author : req.body.author,
            message : req.body.message,
            date : req.body.date
        }
    );

    example.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Example Created successfully')
    })
};

// READ ----------------------------------------------------------------------------

// Find all Examples
exports.findAll = (req, res) => {

    Example.find()
    .then(examples => {
        res.send(examples);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Examples not found"
        });
    });
};

// Find a single example with an id
exports.findOne = (req, res) => {
    Example.findById(req.params.id)
   .then(example => {
       if(!example) {
           return res.status(404).send({
               message: "Example not found with id " + req.params.id
           });
       }
       res.send(example);
   }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "Example not found with id " + req.params.id
           });
       }
       return res.status(500).send({
           message: "Error retrieving example with id " + req.params.id
       });
   });
};

// UPDATE ----------------------------------------------------------------------------

// Example Update
exports.example_update = function (req, res) {
    Example.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, example) {
        if (err) return next(err);
        res.send('Example udpated.');
    });
};

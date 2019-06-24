const Data = require('../models/data.model.js');
// READ ----------------------------------------------------------------------------

// Find all Datas
exports.findAll = (req, res) => {
    Data.find()
    .then(datas => {
        res.send(datas);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Datas not found"
        });
    });
};

// Find a single data with an id
exports.findOne = (req, res) => {
    Data.findById(req.params.id)
   .then(data => {
       if(!data) {
           return res.status(404).send({
               message: "Data not found with id " + req.params.id
           });
       }
       res.send(data);
   }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "Data not found with id " + req.params.id
           });
       }
       return res.status(500).send({
           message: "Error retrieving data with id " + req.params.id
       });
   });
};
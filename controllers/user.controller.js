const User = require('../models/user.model.js');

// User logout
exports.logout = (req, res) => {
  console.log("Controller: logout", req.session);
  if(req.session) {
    req.session.destroy();
    console.log("Session destroy")
    return res.status(200).send(true);
  }
  console.log("No session to destroy")
  return res.status(401).send(false);
}

// User session
exports.session = (req, res) => {
  console.log("Controller: session");
  if(!req.session.user) {
    console.log("Session:", false, req.session.user)
    return res.status(401).send(req.session.user);
  }
  console.log("Session:", true, req.session.user)
  return res.status(200).send(req.session.user);
}

// Login user
exports.login = (req, res) => {
  console.log("Controller: login");
  const {email, password} = req.body
  const resp = User.findOne({email: email, password: password})
  .then(user => {
       if(!user) {
           return res.status(404).send({
               message: "user not found"
           });
       }
       // Add user to express session
       req.session.user = user;

       res.send(user);
   }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "user not found"
           });
       }
       return res.status(500).send({
           message: "Error retrieving user"
       });
   }); 
  if(!resp) {
    console.log("Invalid credential")
  } else {
    console.log("Logging you in") 
  }
}

// Create and Save a new user
exports.create = (req, res) => {
    // Validate request
    if(!req.body.email || !req.body.password) {
        return res.status(400).send({
            message: "user content can not be empty"
        });
    }
    // Create a user
    const user = new User({
      lastname: req.body.lastname,
      firstname: req.body.firstname,
      email: req.body.email,
      password:req.body.password,
      admin:req.body.admin,
      sudo:req.body.sudo
    });
    // Save user in the database
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "erreur à la creation du user."
        });
    });
};

// Retrieve and return all User from the database.
exports.findAll = (req, res) => {

    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "problème à la récupération des Users"
        });
    });
};

// Find a single user with a userid
exports.findOne = (req, res) => {
  console.log(req.session.user);
    User.findById(req.params.id)
   .then(user => {
       if(!user) {
           return res.status(404).send({
               message: "user not found with id " + req.params.id
           });
       }
       res.send(user);
   }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "user not found with id " + req.params.id
           });
       }
       return res.status(500).send({
           message: "Error retrieving user with id " + req.params.id
       });
   });
};

// Update a user's Admin right identified by the userid in the request
exports.updateAdmin = (req, res) => {

    // Validate Request
    if(req.body.admin == null) {
        return res.status(400).send({
            message: "admin field content can not be empty"
        });
    }

    // Find user and update it with the request body
    User.findByIdAndUpdate(req.params.id, {
      admin:req.body.admin,
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'id') {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating user's admin right with id " + req.params.id
        });
    });

};

// Update a user's Sudo right identified by the userid in the request
exports.updateSudo = (req, res) => {

    // Validate Request
    if(req.body.sudo == null) {
        return res.status(400).send({
            message: "sudo field content can not be empty"
        });
    }

    // Find user and update it with the request body
    User.findByIdAndUpdate(req.params.id, {
      sudo:req.body.sudo,
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'id') {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating user's admin right with id " + req.params.id
        });
    });

};

// Delete a user with the specified userid in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.id)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });
        }
        res.send({message: "user deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.id
        });
    });

};

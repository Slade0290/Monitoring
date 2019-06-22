const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
const cors = require('cors');
//const cookieParser = require('cookie-parser')
const hostname = '127.0.0.1';
const port = 3000;

app.use(cors({origin: ["http://localhost:4200"], credentials: true}));

//app.use(cookieParser);

app.use(function(req, res, next) {
  res.setHeader('Content-type', 'application/json');
  res.setHeader('Accept', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin');
  next();
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(session({secret: "rfqfefzq34sc34sffddf", resave:false, saveUninitialized:true, maxAge: 20000}))

mongoose.connect('mongodb://B3C:monitoringb3c@ds231517.mlab.com:31517/web_monitoring', {
  useNewUrlParser: true
}).then(() => {
  console.log("Connecté à la base de donnée");
}).catch(err => {
  console.log('Echec de connexion à la base de données. Cause ...', err);
});

require('./routes/users.route.js')(app);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

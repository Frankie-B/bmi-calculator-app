// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Root route
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Calculating the BMI and procesing the POST request
app.post('/', function(req, res) {
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);

  var bmi = Math.floor(weight / (height * height));

  // What is returned to the user on submit
  res.send('Your BMI is ' + bmi);
});
// Spin up server on port 3000
app.listen(3000, function() {
  console.log('Server started on port 3000');
});

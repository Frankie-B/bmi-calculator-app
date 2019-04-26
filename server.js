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
// Spin up server on port 3000
app.listen(3000, function() {
  console.log('Server started on port 3000');
});

var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send("My first API!");
});

app.get('/funions', function(request, response) {
  response.send("Yo wasup");
});

app.listen(3000, function() {
  console.log("Firts API running on port 3000!");
});

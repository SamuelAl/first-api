var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

var ingredients = [
  {
    "id":"232kAk",
    "text": "Eggs",
  },
  {
    "id":"dkP345",
    "text":"Milk"
  },
  {
    "id":"dkcuu7",
    "text":"Bacon"
  },
  {
    "id":"73hdy",
    "text":"Frog Legs"
  }
];

app.get('/', function(request, response) {
  response.send(ingredients);
});

app.get('/funions', function(request, response) {
  response.send("Yo wasup");
});

app.post('/', function(request, response) {
  var ingredient = request.body;
  if (!ingredient || ingredient.text === "") {
    response.status(500).send({error: "Your ingredient must have a name"});
  }
  else {
    ingredients.push(ingredient);
    response.status(200).send(ingredients);
  }
})

app.listen(3000, function() {
  console.log("Firts API running on port 3000!");
});

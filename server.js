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

app.get('/ingredients', function(request, response) {
  response.send(ingredients);
});

app.post('/ingredients', function(request, response) {
  var ingredient = request.body;
  if (!ingredient || ingredient.text === "") {
    response.status(500).send({error: "Your ingredient must have a name"});
  }
  else {
    ingredients.push(ingredient);
    response.status(200).send(ingredients);
  }
})

app.put('/ingredients/:ingredientId', function(request, response) {
  var newText = request.body.text;
  if (!newText || newText === "") {
    response.status(500).send({error:"Your ingredients must have a text"});
  }
  else {
    var objectFound = false;
    for (var x = 0; x < ingredients.length; x++) {
      var ingredient = ingredients[x];
      if (ingredient.id === request.params.ingredientId) {
        objectFound = true;
        ingredients[x].text = newText;
        break;
      }
    }
    if (!objectFound) {
      response.status(500).send({error:"ingredient id not found"})
    }
    else {
      response.send(ingredients);
    }
  }
})

app.listen(3000, function() {
  console.log("Firts API running on port 3000!");
});

var express = require('express'),
routes = require('./routes'),
app = express(),
exphbs  = require('express-handlebars'),
bodyParser = require('body-parser');

app.use(express.static('./public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const PORT = process.env.PORT || 3000;

app.set('port', PORT);

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use('/', routes);


  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

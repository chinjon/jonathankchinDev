const express = require('express'),
      routes = require('./routes/routes'),
      exphbs = require('express-handlebars');

// const bodyParser = require('body-parser');

const app = express();
app.use(express.static('./public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const port = process.env.PORT || 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use('/', routes);
app.listen(port, () => {
    console.log("App is running on PORT: ", port);
})
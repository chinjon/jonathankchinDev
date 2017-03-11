const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const server = require("http").createServer(app);

var app = express();

var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}))

app.use(express.static('app/public'))



app.listen(process.env.PORT || port)
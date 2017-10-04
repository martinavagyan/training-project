"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
let app = express();
const port = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost/Tododb', {
    useMongoClient: true,
    promiseLibrary: global.Promise
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/apiRoutes'); //importing route
routes(app); //register the route
app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});
app.listen(port);
console.log('todo list RESTful API server started on: ' + port);

var express = require('express');

//START BY "npm run start"
app = express(),
    port = process.env.PORT || 3030,

    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),

    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/Tododb', { useNewUrlParser: true });



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoute');
routes(app); //register the app


app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});


app.listen(port);

console.log('Todo list RESTful API is up and running on: ' + port);
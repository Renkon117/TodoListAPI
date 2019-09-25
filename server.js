var express = require('express');

//START BY "npm run start"
app = express(),
    port = process.env.PORT || 3030,

    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.set('useUnifiedTopology', true);

const url = 'mongodb://127.0.0.1:27017/todo'
// 'mongodb://localhost/Tododb'
mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection
db.once('open', _ => {
    console.log('Database connected:', url)
})

db.on('error', err => {
    console.error('connection error:', err)
})


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes');
routes(app); //register the app


app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});


app.listen(port);
console.log('Todo list RESTful API is up and running on: ' + port);
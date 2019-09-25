var express = require('express');

//START BY "npm run start"
app = express();
port = process.env.PORT || 3030;

app.listen(port);

console.log('Todo list RESTful API is up and running on: ' + port);
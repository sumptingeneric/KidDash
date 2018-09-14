const express = require('express');
const path = require('path');
const app = express();
const database = require('../database');
const bodyParser = require('body-parser');

<<<<<<< HEAD
=======
// accommodates connection to either Heroku or localhost
>>>>>>> b3ab76c96e4eb8c6671a0c5d8be41ddaaddaf6b8
let port = process.env.PORT || 8079;

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// This GET request handler returns all entries from the database
app.get('/api/docs/', (request, response) => {
  database.getFiles(undefined, response);
});

// This GET request handler returns all entries in the database with a specific category
// that is appended to the end of the endpoint e.g. ('/api/docs/Sports')
app.get('/api/docs/:category', (request, response) => {
  // If a GET request is made to our server to the '/api/docs/Sports' endpoint
  // our request.params equals {category: "Sports"}
  // if the endpoint instead is '/api/docs/Newsletter', then our
  // request.params equals {category: "Newsletter"} and so on.
  database.getFiles(request.params, response);
});

app.post('/api/docs/', (request, response) => {
  // console.log(request.body.fileInfo);
  database.saveFile(request.body.fileInfo, response);
});

app.delete('/api/docs', (request, response) => {
  database.deleteFile(request.body, response);
});

app.put('/api/docs', (request, response) => {
  database.updateFile(request.body.id, request.body.update,response);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
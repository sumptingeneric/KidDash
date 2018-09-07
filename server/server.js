const express = require('express');
const path = require('path');
const app = express();
const database = require('../database'); // trying without filename
const bodyParser = require('body-parser');

let port = 8079;

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/docs', (request, response) => {
  // response.send('Page is loading');
  database.getFiles(request.body, response);
});

app.post('/api/docs', (request, response) => {
  database.saveFile(request.body, response);
});


app.listen(port, () => console.log(`Server listening on port ${port}`));
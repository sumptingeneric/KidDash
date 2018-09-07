const express = require('express');
const path = require('path');
const app = express();

let port = 8079;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (request, response) => {
  response.send('Page is loading');
});



app.listen(port, () => console.log(`Server listening on port ${port}`));
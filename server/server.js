const express = require("express");
const path = require("path");
const app = express();
const database = require("../database");
const bodyParser = require("body-parser");

// accommodates connection to either Heroku or localhost
let port = process.env.PORT || 8079;

app.use(express.static(path.join(__dirname, "../public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API Endpoints
app.get("/api/files", (request, response) => {
  database.getFiles(undefined, response);
});

app.get("/api/files/:category", (request, response) => {
  database.getFiles(request.params, response);
});

app.get("/api/users", (request, response) => {
  database.getUsers(undefined, response);
});

app.post("/api/file", (request, response) => {
  database.saveFile(request.body, response);
});

app.post("/api/user", (request, response) => {
  database.saveUser(request.body, response);
});

app.put("/api/file", (request, response) => {
  database.updateFile(request.body.id, request.body.update, response);
});

app.put("/api/user", (request, response) => {
  database.updateUser(request.body.id, request.body.update, response);
});

app.delete("/api/file", (request, response) => {
  database.deleteFile(request.body.id, response);
});

app.delete("/api/user", (request, response) => {
  database.deleteUser(request.body.id, response);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));

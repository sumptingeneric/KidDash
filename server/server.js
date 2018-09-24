const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();
const database = require("../database");
const bodyParser = require("body-parser");
//const cookieParser = require("cookie-parser");
// accommodates connection to either Heroku or localhost
let port = process.env.PORT || 9876;

app.use(express.static(path.join(__dirname, "../public")));
// app.use(cookieParser());
app.use(
  session({
    secret: "I'm yo dad"
  })
);

let checkUser = (req, res, next) => {
  console.log(req.session);
  if (req.session.user) {
    next();
  } else {
    console.log("checkUser FAILED!");
    req.session.error = "Access denied!";
    next();
  }
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/session", (req, res) => {
  if (req.session.user) {
    database.User.find({ username: req.session.user }).then(result => {
      res.send(result);
    });
  } else {
    res.send();
  }
});

app.get("/login", (req, res) => {
  database.User.find({ email: req.query.email })
    .then(result => {
      let type = "Parent";
      //wrap in some condition to avoid component did mount
      req.session.user = req.query.username;
      delete req.session.error;
      if (req.query.email.includes(".edu")) {
        type = "Teacher";
      }
      if (result.length === 0) {
        database.saveUser(
          {
            username: req.query.username,
            email: req.query.email,
            type: type
          },
          res
        );
      } else {
        res.send(result);
      }
    })
    .catch(err => {
      throw err;
    });
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.send();
  });
});
// This GET request handler returns all entries from the database
app.get("/api/files/", checkUser, (request, response) => {
  database.getFiles(undefined, response);
});

app.get("/api/files/:category", checkUser, (request, response) => {
  database.getFiles(request.params, response);
});

app.get("/api/users", checkUser, (request, response) => {
  database.getUsers(undefined, response);
});

app.post("/api/file", checkUser, (request, response) => {
  database.saveFile(request.body, response);
});

app.post("/api/user", checkUser, (request, response) => {
  database.saveUser(request.body, response);
});

app.put("/api/file", checkUser, (request, response) => {
  database.updateFile(request.body.id, request.body.update, response);
});

app.put("/api/user", checkUser, (request, response) => {
  database.updateUser(request.body.id, request.body.update, response);
});

app.delete("/api/file", checkUser, (request, response) => {
  database.deleteFile(request.body.id, response);
});

app.delete("/api/user", checkUser, (request, response) => {
  database.deleteUser(request.body.id, response);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));

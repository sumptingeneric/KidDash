const express = require("express");
const path = require("path");
const app = express();
const database = require("../database");
const bodyParser = require("body-parser");
// const passport = require("passport");
// const auth = require("../auth");
// const cookieParser = require("cookie-parser");
// const cookieSession = require("cookie-session");

// accommodates connection to either Heroku or localhost
let port = process.env.PORT || 9876;

app.use(express.static(path.join(__dirname, "../public")));

app.get("/login", (req, res) => {
  database.UserModel.find({ email: req.query.email })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      throw err;
    });
  res.send();
});

app.get("/signup", (req, res) => {
  database.UserModel.find({ email: request.query.email }).then(res => {
    console.log(res);
  });
});
// auth(passport);
// app.use(passport.initialize());

app.use(express.static(path.join(__dirname, "../public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(
//   cookieSession({
//     name: "session",
//     keys: ["123"]
//   })
// );
// app.use(cookieParser());
// app.get("/test", (req, res) => {
//   console.log("test");
// });
// app.get("/", (req, res) => {
//   if (req.session.token) {
//     res.cookie("token", req.session.token);
//     res.json({
//       status: "session cookie set"
//     });
//   } else {
//     res.cookie("token", "");
//     res.json({
//       status: "session cookie not set"
//     });
//   }
// });
// app.get(
//   "/auth/google",
//   passport.authenticate("google", {
//     scope: ["https://www.googleapis.com/auth/userinfo.profile"]
//   })
// );
// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "/"
//   }),
//   (req, res) => {
//     req.session.token = req.user.token;
//     res.redirect("/");
//   }
// );
// app.get("/logout", (req, res) => {
//   req.logout();
//   console.log("logged out");
//   req.session = null;

//   res.redirect("/");
// });

// This GET request handler returns all entries from the database
app.get("/api/docs/", (request, response) => {
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

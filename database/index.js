const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

// accommodates connection to either Heroku or localhost
let uristring =
  process.env.MONGOLAB_URI || "mongodb://localhost/KidDashDatabase";

// second argument avoids console warnings
mongoose.connect(
  uristring,
  { useNewUrlParser: true }
);
let db = mongoose.connection;
db.on("error", console.error.bind(console, "db connection error"));
db.once("open", () => console.log("Database successfully connected"));

let fileSchema = new mongoose.Schema({
  caption: String,
  docUrl: { type: String, unique: true },
  imgUrl: String,
  timeStamp: { type: Date, default: Date.now },
  board: String,
  teacherComments: String,
  uploadedBy: String,
  pinnedBy: [String],
  likedBy: [String]
});

let userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  type: String, //parent/teacher/admin
  students: Array,
  myDocs: Array, //doc ids
  myPins: Array,
  myBoards: Array, //have list of categories, where we would filter
  myLikedDocs: Array
});

let File = mongoose.model("File", fileSchema);
let User = mongoose.model("User", userSchema);

// GET
const getFiles = (details = {}, response) => {
  File.find(details).exec((err, data) => {
    if (err) {
      return console.error(`Error while retrieving files: ${err}`);
    }
    response.status(200).send(data);
  });
};

const getUsers = (details = {}, response) => {
  User.find(details).exec((err, data) => {
    if (err) {
      return console.error(`Error while retrieving users: ${err}`);
    }
    response.status(200).send(data);
  });
};

// POST
const saveFile = (data, response) => {
  let newFile = new File(data);

  newFile.save((err, newFile) => {
    if (err && err.code !== 11000) {
      console.error(`Error while saving File data: ${err}`);
      response.status(500).send(err);
      return;
    } else if (err && err.code === 11000) {
      console.error(
        `File URL already exists, cannot save File data. Error: ${err}`
      );
      response.status(400).send(err);
      return;
    }
    response.status(200).send(newFile);
  });
};

const saveUser = (data, response) => {
  let newUser = new User(data);

  newUser.save((err, newUser) => {
    if (err && err.code !== 11000) {
      console.error(`Error while saving User data: ${err}`);
      response.status(500).send(err);
      return;
    } else if (err && err.code === 11000) {
      console.error(
        `User email already exists, cannot save User data. Error: ${err}`
      );
      response.status(400).send(err);
      return;
    }
    response.status(200).send([newUser]);
  });
};

// PUT
const updateFile = (id, update, response) => {
  File.findByIdAndUpdate(id, update, (err, updatedFile) => {
    if (err) {
      console.error(`Error while updating File data. Error: ${err}`);
      response.status(500).send(err);
      return;
    }
    response.status(200).send(updatedFile);
  });
};

const updateUser = (id, update, response) => {
  User.findByIdAndUpdate(id, update, (err, updatedUser) => {
    if (err) {
      console.error(`Error while updating User data. Error: ${err}`);
      response.status(500).send(err);
      return;
    }
    response.status(200).send(updatedUser);
  });
};

// DELETE
const deleteFile = (id, response) => {
  File.findByIdAndRemove(id, (err, deletedFile) => {
    if (err) {
      console.error(`Error while deleting File from database. Error: ${err}`);
      response.status(500).send(err);
      return;
    }
    response.status(200).send(deletedFile);
  });
};

const deleteUser = (id, response) => {
  User.findByIdAndRemove(id, (err, deletedUser) => {
    if (err) {
      console.error(`Error while deleting User from database. Error: ${err}`);
      response.status(500).send(err);
      return;
    }
    response.status(200).send(deletedUser);
  });
};

module.exports.getFiles = getFiles;
module.exports.getUsers = getUsers;
module.exports.saveFile = saveFile;
module.exports.saveUser = saveUser;
module.exports.updateFile = updateFile;
module.exports.updateUser = updateUser;
module.exports.deleteFile = deleteFile;
module.exports.deleteUser = deleteUser;
module.exports.User = User;
module.exports.File = File;
module.exports.db = db;
//usermodel

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

// accommodates connection to either Heroku or localhost
let uristring =
  process.env.MONGOLAB_URI || 'mongodb://localhost/KidDashDatabase';

// second argument avoids console warnings
mongoose.connect(
  uristring,
  { useNewUrlParser: true }
);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error'));
db.once('open', () => console.log('Database successfully connected'));

let fileSchema = new mongoose.Schema({
  caption: String,
  docUrl: { type: String, unique: true },
  imgUrl: String,
  timeStamp: { type: Date, default: Date.now },
  board: String,
  teacherComments: String,
  uploadedBy: Array,
  pinnedBy: Array,
  likedBy: Array
});

let User = new mongoose.Schema({
  username: String,
  email: String,
  type: String, //parent/teacher/admin
  students: Array,
  myDocs: Array, //doc ids
  myPins: Array,
  myBoards: Array, //have list of categories, where we would filter
  myLikedDocs: Array
});

let FileModel = mongoose.model('FileModel', fileSchema);

// retrieve files from db for front end
const getFiles = (details = {}, response) => {
  FileModel.find(details).exec((err, data) => {
    if (err) {
      return console.error(`error while retrieving files: ${err}`);
    }
    response.status(200).send(data);
  });
};

// save a new record into the db
const saveFile = (fileDetails, response) => {
  // console.log(`fileDetails from db on line 37 ${JSON.stringify(fileDetails)}`);
  let newFile = new FileModel(fileDetails);
  newFile.save(err => {
    if (err && err.code !== 11000) {
      console.error(`error while saving file: ${err}`);
      response.status(500).send(err);
      return;
    } else if (err && err.code === 11000) {
      console.error(`URL already exists, cannot save file. Error: ${err}`);
      response.status(400).send(err);
      return;
    }
    getFiles({}, response);
  });
};

// update the category or caption for a record
const updateFile = (id, update, response) => {
  // update
  FileModel.findByIdAndUpdate(id, update, (err, updatedFile) => {
    if (err) {
      console.error(`Error while updating file. Error: ${err}`);
      response.status(500).send(err);
      return;
    }
    // console.log(`Updated file with previous caption: ${updatedFile.caption}`); // console.logs previous state of file
    getFiles({}, response);
  });
};

// delete a record
const deleteFile = (id, response) => {
  // delete
  FileModel.findByIdAndRemove(id, (err, deletedFile) => {
    if (err) {
      console.error(`Error while deleting file from database. Error: ${err}`);
      response.status(500).send(err);
      return;
    }
    // console.log(`Deleted file with caption: ${deletedFile.caption}`);
    getFiles({}, response);
  });
};

module.exports.getFiles = getFiles;
module.exports.saveFile = saveFile;
module.exports.updateFile = updateFile;
module.exports.deleteFile = deleteFile;

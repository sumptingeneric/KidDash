const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

<<<<<<< HEAD
let uristring = process.env.MONGOLAB_URI || 'mongodb://localhost/KidDashDatabase';

=======
// accommodates connection to either Heroku or localhost
let uristring = process.env.MONGOLAB_URI || 'mongodb://localhost/KidDashDatabase';

// second argument avoids console warnings
>>>>>>> b3ab76c96e4eb8c6671a0c5d8be41ddaaddaf6b8
mongoose.connect(uristring, {useNewUrlParser: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error'));
db.once('open', () => console.log('Database successfully connected'));

let fileSchema = new mongoose.Schema({
  caption: String,
  doc_url: {type: String, unique: true},
  img_url: String,
  timeStamp: { type: Date, default: Date.now },
  category: String
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
const updateFile = (id, update, response) => { // update
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
const deleteFile = (id, response) => { // delete
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
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


mongoose.connect('mongodb://localhost/KidDashDatabase');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error'));
db.once('open', () => console.log('Database successfully connected'));

let fileSchema = new mongoose.Schema({
  caption: String,
  url: { type: String, unique: true},
  timeStamp: { type: Date, default: Date.now },
  category: String
});

// var eventSchema = new Schema({ thing: { type: 'string', unique: true }})
// confirm we can leave String


let FileModel = mongoose.model('FileModel', fileSchema);

const getFiles = (details = {}, response) => { // retrieve
  // when GET request is invoked,
  // take this response parameter
  FileModel.find(details).exec((err, data) => {
    if (err) {
     return console.error(`error while retrieving files: ${err}`);
    }
    // response.statusCode(200).send(data);
    response.send(data);
  });
};

const saveFile = (fileDetails, response) => { // create
  let newFile = new FileModel(fileDetails);
  newFile.save(err => {
    if (err) {
      return console.error(`error while saving file: ${err}`);
    }
    getFiles({}, response);
  });
};

const updateFile = () => { // update
};

const deleteFile = (id) =>  { // delete

};

module.exports.getFiles = getFiles;
module.exports.saveFile = saveFile;
module.exports.updateFile = updateFile;
module.exports.deleteFile = deleteFile;
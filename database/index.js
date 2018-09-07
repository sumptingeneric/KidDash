const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/KidDashDatabase');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error'));
db.once('open', () => console.log('Database successfully connected'));

let fileSchema = new mongoose.schema({
  caption: String,
  url: String,
  timeStamp: { type: Date, default: Date.now },
  category: String
});

let FileModel = mongoose.model('FileModel', fileSchema);

const getFiles = (details = {}) => { // retrieve
};

const saveFile = () => { // create
};

const updateFile = () => { // update
};

const deleteFile = (id) =>  { // delete

};

module.exports.getFiles = getFiles;
module.exports.saveFile = saveFile;
module.exports.updateFile = updateFile;
module.exports.deleteFile = deleteFile;
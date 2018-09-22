// Importing the connection to the db.
var database = require("./index");

// Importing the models to write to the db.
var User = database.User;
var File = database.File;

var data = require("./seedData.json");

var db = database.db;

db.on("open", () => {
  // keep an array of Promises
  var operations = [];

  // We drop the db as soon the connection is open
  // database.dropDatabase(() => console.log('Database dropped'));
  db.dropDatabase()
    .then(() => console.log("Database dropped"))
    .then(() => {
      data.users.forEach(user => {
        operations.push(saveAsync(User, user));
      });

      data.files.forEach(file => {
        operations.push(saveAsync(File, file));
      });
    })
    .then(() => {
      Promise.all(operations).then(() => {
        db.close(() => {
          console.log("Mongoose connection closed!");
        });
      });
    })
    .catch(error => console.log(error));

  function saveAsync(model, data) {
    return new Promise((resolve, reject) => {
      new model(data).save(err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
});

const fs = require("fs");
var dbData = require("../db/db.json");

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    fs.readFile(dbData, "utf8", function(err, data) {
      if (err) {
        throw err;
    }
      var parsedNote = JSON.parse(data);
      res.json(parsedNote);
    })

  });
      
  app.post("/api/notes", function(req, res) {
    fs.readFile(dbData, "utf8", function(err, data) {
      if (err) { 
        throw err;
      }
      var parsedNote = JSON.parse(data);
      var newNote = req.body
      var ID = (notes.length).toString();
      newNote.id = ID
      parsedNote.push(newNote);
      fs.writeFileSync(dbData, JSON.stringify(parsedNote));
      res.json(parsedNote);
    });

  });

};



const fs = require("fs");
var dbData = require("../db/db.json");

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(fs.readFile(dbData, "utf8"));
      });
      
    app.post("/api/notes", function(req, res) {

        console.log("Working!");
      });
}
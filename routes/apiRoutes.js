
const fs = require("fs");
var dbData = "./db/db.json";
var parsedNotes = JSON.parse(fs.readFileSync(dbData, 'utf8'));

module.exports = function(app) {
    app.get("/api/notes", (req, res) => {
        res.json(parsedNotes);
    });

    app.get("/api/notes/:id", (req, res) => {
        res.json(parsedNotes[(req.params.id)]);
    });

    app.post("/api/notes", (req, res) => {
        var newNote = req.body;
        newNote.id = (parsedNotes.length) + 1;
        parsedNotes.push(newNote);
        fs.writeFileSync(dbData, JSON.stringify(parsedNotes));
        res.json(parsedNotes)
    });

    app.delete("/api/notes/:id", (req, res) => {
        let noteId = req.params.id;
        parsedNotes = parsedNotes.filter(currentValue => {
            return currentValue.id != noteId;
        });
        let noteId2 = 1;
        for (currentValue of parsedNotes) {
            currentValue.id = noteId2;
            noteId2++;
        }

        fs.writeFileSync(dbData, JSON.stringify(parsedNotes));
        res.json(parsedNotes);
    });
};


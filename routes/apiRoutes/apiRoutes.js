const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const savedNotes = require('../../db/db.json')
const { nanoid } = require('nanoid');

router.get("/notes", (req, res) => {
    res.send(JSON.parse(fs.readFileSync('./db/db.json', 'utf8')));
});


router.post("/notes", (req, res) => {
    let savedNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    let id = nanoid();
    let makeNote = {
        title: req.body.title,
        text: req.body.text,
        id: id,
    }
    savedNotes.push(makeNote);


fs.writeFile('./db/db.json', JSON.stringify(savedNotes), (err) => {
    if (err) throw err;
})

return res.json(savedNotes);
});


module.exports = router;

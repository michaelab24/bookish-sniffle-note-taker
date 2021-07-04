const path = require('path');
const router = require('express').Router();

//this makes html file displayed first

router.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});









module.exports = router;
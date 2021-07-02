const path = require('path');
const router = require('express').Router();

//this makes html file displayed first

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});











module.exports = router;
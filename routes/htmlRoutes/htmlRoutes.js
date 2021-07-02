const path = require('path');
const router = require('express').Router();

//this makes html file displayed first

router.get("/", (req, res) => {
    res.send("hey fucker");
});











module.exports = router;
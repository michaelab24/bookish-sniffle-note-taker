const fs = require("fs");
const path = require("path")
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();


const htmlRoutes = require("./routes/htmlRoutes/htmlRoutes");
//const apiRoutes = require('./routes/apiRoutes/apiRoutes.js');


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use apiRoutes
//app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
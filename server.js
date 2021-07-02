const fs = require("fs");
const path = require("path")
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();


const apiRoutes = require('./routes/apiRoutes/apiRoutes.js');
const htmlRoutes = require('./routes/htmRoutes/htmlRoutes.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
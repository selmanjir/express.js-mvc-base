const express = require('express');
const app = express();
const db_connect = require('./config/db');

// Set template engine
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/routes'));

app.listen(4111, console.log("Server has started at port " + 4111))
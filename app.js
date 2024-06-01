const { log } = require('console');
const express = require("express");

require('dotenv').config({ path: './util/.env' }); // Load environment variables

const app = express();
const port = process.env.PORT;
const routes = require('./routes/routes');

const morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.json()); // Middleware to parse JSON bodies

// Use routes
app.use('/', routes);

app.listen(port, () => {
    log(`listening on : ${port}`);
});

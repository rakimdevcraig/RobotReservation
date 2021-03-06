const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const issues = require('./routes/api/issues');
const robots = require('./routes/api/robots');


const app = express();
app.use(cors());

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {useNewUrlParser: true}) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/issues', issues);
app.use('/api/robots', robots);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server started on port ${port}`));
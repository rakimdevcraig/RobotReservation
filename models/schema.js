
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const IssueSchema = new Schema({
  name: {
    type: String,
    // required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});



module.exports = Issue = mongoose.model('issue', IssueSchema);
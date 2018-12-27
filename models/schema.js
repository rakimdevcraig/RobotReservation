
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var dateFormat = require('dateformat');
var now = new Date();

// Create Schema
const IssueSchema = new Schema({
  name: {
    type: String,
    // required: true
  },
  date: {
    type: Date,
    default: Date.now
     // default: dateFormat(now, JSON.parse("dddd, mmmm dS, yyyy, h:MM:ss TT");
    //dateformat npm
  }
});

module.exports = Issue = mongoose.model('issue', IssueSchema);
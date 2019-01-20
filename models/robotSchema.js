const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const RobotSchema = new Schema({
  Name: {
    type: String,
    // required: true
  },
  Status: {
    type: String,
    default: "Available"
  },
  Resin: {
    type: String
  }

});



module.exports = Robot = mongoose.model('robot', RobotSchema);

// Robot.find()
// .then(robot => console.log('testing schema',robot))
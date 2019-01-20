const express = require('express');
const router = express.Router();

// Issue Model
const Robot = require('../../models/robotSchema');

// @route   GET api/schema
//    Get All Robots


router.get('/', (req, res) => {
  Robot.find()
    .then(robots => res.json(robots));
});

//@route   POST api/schema
 //Create An Issue
 //replace 'function' with .then
router.post('/', (req, res) => {
    Robot.findOne({Name: req.body.Name}, function (err, robot) {
        robot.Status = req.body.Status;
    
        robot.save(function (err) {
            if(err) {
                console.error('ERROR!');
            }
        });
    });
  console.log(req.body)
});

// @route   DELETE api/schema/id
//   Delete A Robot
// router.delete('/:id', (req, res) => {
//   Issue.findById(req.params.id)
//     .then(issue => issue.remove().then(() => res.json({ success: true })))
//     .catch(err => res.status(404).json({ success: false }));
// });

module.exports = router;

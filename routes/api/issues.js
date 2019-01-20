const express = require('express');
const router = express.Router();

// Issue Model
const Issue = require('../../models/schema');

// @route   GET api/schema
//    Get All Issues
router.get('/', (req, res) => {
  Issue.find()
    .sort({ date: -1 })
    .then(issues => res.json(issues));
});



// @route   POST api/schema
//  Create An Issue
router.post('/', (req, res) => {
  const newIssue = new Issue({
    name: req.body.issue
  });

  newIssue.save().then(issue => res.json(issue));
});

// @route   DELETE api/schema/id
//   Delete An Issue
router.delete('/:id', (req, res) => {
  Issue.findById(req.params.id)
    .then(issue => issue.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;

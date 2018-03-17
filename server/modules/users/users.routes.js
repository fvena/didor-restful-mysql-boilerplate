const express = require('express');
const Users = require('./users.models');

const router = express.Router();

// define the home page route
router.get('/', (req, res) => {
  Users.getUsers((err, data) => {
    res.status(200).json(data);
  });
});

module.exports = router;

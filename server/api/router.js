const express = require('express');
const tasks = require('./v1/tasks/tasks.routes');

const router = express.Router();

// GET status
router.get('/status', (req, res) => res.send('OK'));

// mount api v1 routes
router.use('/v1/tasks', tasks);


module.exports = router;

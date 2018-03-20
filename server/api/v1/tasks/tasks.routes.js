const express = require('express');
const models = require('../../../config/models');

const router = express.Router();

router.get('/', (req, res) => {
  return models.task
    .findAll()
    .then(todos => res.status(200).send(todos))
    .catch(error => res.status(400).send(error));
});

module.exports = router;

const express = require('express');
const router = express.Router();
const { user } = require('../database');


router.get('/all', function(req, res, next) {
  user.findAll().then(users => res.json(users));
});

router.post('/', function(req, res, next) {
  user.create({ name: 'cemil'})
        .then(user => res.json(user));
});

module.exports = router;

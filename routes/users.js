const express = require('express');
const router = express.Router();
const { User } = require('../database');


router.get('/', function(req, res, next) {
  User.findAll().then(users => res.json(users));
});

router.post('/', function(req, res, next) {
  User.create({ name: 'cemil'})
        .then(user => res.json(user));
});

module.exports = router;

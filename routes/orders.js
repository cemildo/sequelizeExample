const express = require('express');
const router = express.Router();
const { User, Address, Orders } = require('../database');


router.get('/', function(req, res, next) {
  Orders.findAll({

  }).then(users => res.json(users));
});

router.post('/user', function(req, res, next) {
  // validation check
  User.create(req.body).then(user => res.json(user));
});

router.post('/address', function(req, res, next) {

    Address.create({
      street: 'Bahnhofstrasse 20',
      city: 'zollikon',
      zip: '8790',
      country: 'Schweiz',
      UserId: '65eaf13b-0a20-4cd5-95e4-71a7fccd58af'
    })
    .then((address) => res.json(address));

});

module.exports = router;

var express = require('express');
var router = express.Router();

var ostObj = require('../sdk');

const userService = ostObj.services.users;

console.log("Create a new user route initialized");

/* Create  a new user */
router.get('/:user', function (req, res, next) {

  userService.create({
    name: req.params.user
  }).then(function (a) {
    console.log(JSON.stringify(a))
  }).catch(console.log);

  res.send('respond with a resource');

});

module.exports = router;
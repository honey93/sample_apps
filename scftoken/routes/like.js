var express = require('express');
var router = express.Router();

var ostObj = require('../sdk');

const actionService = ostObj.services.transactions;

console.log("Create a new user route initialized");

/* Create  a new user */
router.get('/:people', function (req, res, next) {

 var people_id = JSON.parse(req.params.people);

 console.log(people_id.from);

  actionService.execute({from_user_id:people_id.from, to_user_id:people_id.to, action_id:'39003'}).then(function (a) {
    console.log(JSON.stringify(a))
  }).catch(console.log);

  res.send('respond with a resource');

});

module.exports = router;
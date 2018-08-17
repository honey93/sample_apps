var express = require('express');
var router = express.Router();

var ostObj = require('../sdk');

const actionService = ostObj.services.transactions;

console.log("Create a new user route initialized");

/* Create  a new user */
router.get('/:id', function (req, res, next) {

 //var people_id = JSON.parse(req.params.people);

// console.log(people_id.from);

  actionService.execute({to_user_id:req.params.id, action_id:'39002'}).then(function (a) {
    console.log(JSON.stringify(a))
  }).catch(console.log);

  res.send('respond with a resource');

});

module.exports = router;
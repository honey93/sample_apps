var express = require('express');
var router = express.Router();

var ostObj = require('../sdk');

const actionService = ostObj.services.transactions;

console.log("Create a new user route initialized");

/* Create  a new user */
router.get('/:userid', function (req, res, next) {

 //var people_id = JSON.parse(req.params.people);

// console.log(people_id.from);

  actionService.execute({from_user_id:req.params.userid, action_id:'39001'}).then(function (a) {
    console.log(JSON.stringify(a));
    res.send('respond with a resource');
  }).catch(console.log);

  

});

module.exports = router;
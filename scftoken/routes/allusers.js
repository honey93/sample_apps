var express = require('express');
var router = express.Router();

var ostObj = require('../sdk');

const userService = ostObj.services.users;

console.log("allusers");

/* GET all users listing. */
router.get('/', function (req, res, next) {

    userService.list({page_no:1,limit:100}).then(function (result) {

        res.json(result.data);
        
    }).catch(function (err) {
        console.log(JSON.stringify(err));
    });

});

module.exports = router;
var express = require('express');
var router = express.Router();

var ostObj = require('../sdk');

const ledgerService = ostObj.services.ledger;

console.log("ledger");

/* GET all users listing. */
router.get('/:userid', function (req, res, next) {

    ledgerService.get({page_no:1,limit:100,
       id:req.params.userid
    }).then(function (result) {

        res.json(result.data);

    }).catch(function (err) {
        res.json(err);
    });

});

module.exports = router;
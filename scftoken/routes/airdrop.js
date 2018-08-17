var express = require('express');
var router = express.Router();

var ostObj = require('../sdk');

const airdropService = ostObj.services.airdrops;

console.log("airdrop");

/* Give tokens to particular user */
router.get('/:id', function (req, res, next) {

    airdropService.execute({
        amount: 5,
        user_ids: req.params.id
    }).then(function (res) {
        res.send("Airdrop Route Called");
        console.log(JSON.stringify(res));
    }).catch(function (err) {
        console.log(JtSON.stringify(err));
    });

    

});

module.exports = router;
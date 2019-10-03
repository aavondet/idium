var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var account = require('../models/account');

const transferRouter = express.Router();
transferRouter.use(bodyParser.json());

transferRouter.route('/:id/:tid/:amount')
.get((req, res, next) => {
    account.findOne({'username': req.params.id})
    .then((source) => {
      account.findOne({'username': req.params.tid})
      .then((target) => {
        var urls = "https://rs3.xpring.dev/accounts/" + source.ilp_name + "/payments";
        var bodyd = JSON.stringify({
          "receiver": target.ilp_pointer,
          "source_amount": req.params.amount
        })

        request.post({
          url: urls,
          body: bodyd,
          headers: { 
            'Authorization': 'Bearer ' + source.ilp_name + ':' + source.secret,
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }, function (err, result) {
          res.send(result.body)
        });
      }, (err) => next(err))
      .catch((err) => next(err));
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports = transferRouter;

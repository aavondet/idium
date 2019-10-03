var express = require('express');
var bodyParser = require('body-parser');
var ilp = require('./ilp-plugin');
var spsp = require('ilp-protocol-spsp');
var Account = require('../models/account');

const transferRouter = express.Router();
transferRouter.use(bodyParser.json());

transferRouter.route('/:id/:tid/:amount')
.get(async (req, res, next) => {
    account.findById(req.params.id)
    .then((source) => {
      account.findById(req.params.tid)
      .then(async (target) => {
        i = ilp({'user': source.ilp_name, 'secret': source.secret, 'endpoint': 'btp+wss://rs3.xpring.dev/ilp/btp' })
        await SPSP.pay(i, { receiver: target.ilp_pointer, sourceAmount: amount })
      }, (err) => next(err))
      .catch((err) => next(err));
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports = transferRouter;

var express = require('express');
var bodyParser = require('body-parser');
var Account = require('../models/account');

const accountRouter = express.Router();

accountRouter.use(bodyParser.json());

accountRouter.route('/')
.get((req, res, next) => {
    account.find({})
    .then((account) => {
        console.log('Gathered all accounts');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(accounts);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    account.create(req.body)
    .then((account) => {
        console.log('Created: ' + account);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(account);
    }, (err) => next(err))
    .catch((err) => next(err));
})

accountRouter.route('/:id')
.get((req, res, next) => {
    account.findById(req.params.id)
    .then((account) => {
        console.log('Gathered account with id: ' + req.params.id);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(account);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    account.findByIdAndUpdate(req.params.id, req.body, { new : true})
    .then((account) => {
        console.log('Updated account ' + req.params.id + ' to ' + account);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(account);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    account.findByIdAndDelete(req.params.id)
    .then((account) => {
        console.log('account ' + req.params.id + ' deleted...');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json'); 
        res.json(account);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = accountRouter;
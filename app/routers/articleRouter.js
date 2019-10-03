var express = require('express');
var bodyParser = require('body-parser');
var article = require('../models/article');

const articleRouter = express.Router();

articleRouter.use(bodyParser.json());

articleRouter.route('/')
.get((req, res, next) => {
    article.find({})
    .then((article) => {
        console.log('Gathered all articles');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(articles);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    article.create(req.body)
    .then((article) => {
        console.log('Created: ' + article);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(article);
    }, (err) => next(err))
    .catch((err) => next(err));
})

articleRouter.route('/:id')
.get((req, res, next) => {
    article.findById(req.params.id)
    .then((article) => {
        console.log('Gathered article with id: ' + req.params.id);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(article);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    article.findByIdAndUpdate(req.params.id, req.body, { new : true})
    .then((article) => {
        console.log('Updated article ' + req.params.id + ' to ' + article);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(article);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    article.findByIdAndDelete(req.params.id)
    .then((article) => {
        console.log('article ' + req.params.id + ' deleted...');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json'); 
        res.json(article);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = articleRouter;

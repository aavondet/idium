const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var article = new Schema({
    title: {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    },
    preview : {
        type : String,
        required : true
    },
    image : {
        type : String
    },
    views : {
        type : Number,
        default : 0
    },
    author : {
        type : String,
        required : true
    },
    date: {
        type : String,
        required : true
    },
},{
    collection : 'Articles'
})

module.exports = mongoose.model('Article', article);

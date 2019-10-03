const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var account = new Schema({
    secret : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true,
        unique: true
    },
    username : {
        type : String,
        required : true,
        unique: true
    },
    pass : {
        type : String,
        required : true
    },
    following: {
        type : Array,
        default: []
    },
},{
    collection : 'Accounts'
})

module.exports = mongoose.model('Account', account);
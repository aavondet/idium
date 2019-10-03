const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var account = new Schema({
    secret : {
        type : String,
        required : true
    },
    ilp_pointer : {
        type : String,
        required : true
    },
    ilp_name : {
        type : String,
        required : true
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
    topics: {
        type: Array,
        default: []
    }
},{
    collection : 'Accounts'
})

module.exports = mongoose.model('Account', account);

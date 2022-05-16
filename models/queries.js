const mongoose = require('mongoose');

const Queries = mongoose.model('Queries',new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    }
}))

exports.Queries = Queries;
const mongoose = require('mongoose');

const Customer = mongoose.model('Customer',new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        isunique:true
    },
    password:{
        type:String,
        required:true
    }
}))

exports.Customer = Customer;
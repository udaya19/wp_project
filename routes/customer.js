const express = require('express');
const router = express.Router();
const {Customer} = require('../models/customer');
// const { check,validationResult } = require('express-validator');
// var bodyParser = require('body-parser');
// var parseUrlencoded = bodyParser.urlencoded({ extended: false });
/*Get method*/
router.get('/',async (req,res)=>{
    const customer = await Customer.find().select('name').select('email');
    res.send(customer);
})
router.get('/:id',async (req,res)=>{
    const customer = await Customer.findById(req.params.id).select('name').select('email');
    res.send(customer);
})

/*Post method*/
router.post('/'
// check('email').custom((value,{req})=>{
//     let user = Customer.findOne({email:req.body.email})
//     if(value === user){
//         alert("User in use");
//     }
// })
,async (req,res)=>{
    // const errors = validationResult(req)
    // if(!errors.isEmpty()){
    //     res.status(422).json(errors.array());
    // }
    let customer = new Customer({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        confirmpassword:req.body.confirmpassword
    })
    
    customer = await customer.save();
    res.redirect('/products');
})

/*Put method*/
router.put('/:id', async (req, res) => {
    const customer = await Customer.findByIdAndUpdate(req.params.id,
    { 
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmpassword:req.body.confirmpassword
    },{ new: true });
  
    if (!customer) return res.status(404).send('The customer with the given ID was not found.');
    res.send(customer);
});
module.exports = router;
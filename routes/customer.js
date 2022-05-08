const express = require('express');
const router = express.Router();
const {Customer} = require('../models/customer');
/*Get method*/
router.get('/',async (req,res)=>{
    const customer = await Customer.find().select('-password');
    res.send(customer);
})
router.get('/:id',async (req,res)=>{
    const customer = await Customer.findById(req.params.id);
    res.send(customer);
})

/*Post method*/
router.post('/',async (req,res)=>{
    let customer = await Customer.findOne({ email: req.body.email });
  if (customer) return res.status(400).send('User already registered.');
     customer = new Customer({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    customer = await customer.save();
    res.send(customer);
})

/*Put method*/
router.put('/:id', async (req, res) => {
    const customer = await Customer.findByIdAndUpdate(req.params.id,
    { 
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    },{ new: true });
  
    if (!customer) return res.status(404).send('The customer with the given ID was not found.');
    res.send(customer);
});
module.exports = router;
const express = require('express');
const router = express.Router();
const {Queries} = require('../models/queries');


/*Post method*/
router.post('/add-query',async (req,res)=>{
    let query = new Queries({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message
    })
    query = await query.save();
    res.redirect('/');
})

module.exports = router;
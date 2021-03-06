const express = require('express');
const app = express(); 
const hbs = require("hbs");
const path = require("path");
const mongoose = require('mongoose');
const customers = require('./routes/customer');
const query = require('./routes/queries');
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
try{
    mongoose.connect('mongodb://localhost/wp_project')
    .then(()=>{
        console.log("Database Connected Successfully");
    })
    .catch(()=>{
        console.log("Failed");
    })
}
catch(ex){
    console.log(ex);
}

app.set('view engine','hbs');
const css_path = path.join(__dirname,'/public');
app.use(express.static(css_path));
app.get("/",(req,res)=>{
    res.render("index");
})

app.get('/products',(req,res)=>{
    res.render("products");
})
app.get('/signin.hbs',(req,res)=>{
    res.render("signin");
})
hbs.registerPartials(__dirname+'/views','{{nav}}')
hbs.registerPartials(__dirname+'/views','{{footer}}')
hbs.registerPartials(__dirname+'/views','{{nav1}}')

app.use(express.json());
app.use('/',customers);
// app.use('/add-query',query)
app.listen("3001",()=>{
    console.log("Server running on 3001")
})
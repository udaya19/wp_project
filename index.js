const express = require('express');
const app = express(); 
const hbs = require("hbs");
const path = require("path");
app.set('view engine','hbs');
const css_path = path.join(__dirname,'/public');
app.use(express.static(css_path));
app.get("/",(req,res)=>{
    console.log(css_path);
    res.render("index");
})

hbs.registerPartials(__dirname+'/views','{{nav}}')
hbs.registerPartials(__dirname+'/views','{{footer}}')


app.listen("3001",()=>{
    console.log("Server running on 3001");
})
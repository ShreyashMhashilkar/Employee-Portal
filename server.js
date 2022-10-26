const express = require('express');
const mongoos = require('mongoose');
const bodyParser = require('body-parser');
const homeRoutes = require('./routers/home');


const app=express();
const port  = process.env.port || 8000;

mongoos.connect("mongodb://localhost:27017/employeedetails",{useNewUrlParser: true})
const db = mongoos.connection;
db.on('error',()=>{
    console.log("Error is");
})
db.once('open',()=>{
    console.log("Connected");
})


app.set('view engine','ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use('/', homeRoutes)

app.listen(port)
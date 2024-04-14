const express = require ('express');
const app = express();
const path =require ('path');
const routes = require('./routes/routes.js')

const indexRoute= require ('./routes/routes');
const studentRoute= require ('./routes/studentRoutes');
const userRoute = require ('./routes/userRoutes');

app.use('/',routes);
app.use('/index',indexRoute);
app.use('/student',studentRoute);
app.use('/users',userRoute);

//for handling Error Pages
app.use('*',(req,res,next)=>{
    res.status(404);
    let error_page = path.join(__dirname,"/pages/error.html");
    res.sendFile(__dirname);
   
});

module.exports = app;
const express = require('express');

const mongoose = require('mongoose');

const app = express();

var url = "mongodb://127.0.0.1:27017/students";
mongoose.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true  });

var db = mongoose.connection;
db.on("connected",()=>{
    console.log("Connected");
})

db.on("error",()=>{
    console.log("Not Connected");
})

//routes
app.get('/' , (req,res) =>{
    res.send("Home");
})
app.get('/students' , (req,res) =>{
    res.send("Student's information");
})

app.post('/post' , (req,res) =>{
    res.send("student add");
})

app.put('/students/:id' , (req,res) =>{
    res.send("student's info edit by id");
})

app.put('/students/:name' , (req,res) =>{
    res.send("student's info edit");
})

app.delete('/students/:id' , (req,res) =>{
    res.send("delete record");
})














app.listen(3001 , ()=>{
    console.log("server is running on 3001");
})
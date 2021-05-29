const express = require('express');

const app = express();

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
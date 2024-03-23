const express = require('express')
const app=express()
const notes = require('./data/notes')
const dotenv = require('dotenv')

const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.get('/api/notes/',(req,res)=>{
    res.send(notes);
})

app.get('/api/notes/:id',(req,res)=>{
    const id=req.params.id;
    const note = notes.find(note=>note._id===id);
    res.send(note);
})

app.listen(PORT,()=>{
    console.log("server is live on https://localhost:5000");})
import express from "express";
import mongoose from "mongoose"
import Cards from "./dbCards.js";
import cors from 'cors';

const app = express()
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:admin@cluster0.tlsby.mongodb.net/tinderDB?retryWrites=true&w=majority'

mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.status(200).send("Hello World");
});
app.post('/tinder/card',(req,res)=>{
    const dbCard = req.body;

    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })

});

app.get('/tinder/card',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

app.listen(port, ()=>console.log(`Server Running on ${port}`))
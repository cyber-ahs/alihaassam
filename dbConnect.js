const mongoose = require('mongoose')

const URL = 'mongodb+srv://alihassam:Karachi123!@cluster0.3rahzez.mongodb.net/test'

mongoose.connect(URL , {useUnifiedTopology:true , useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})
connection.on('error' , (error)=>{
    console.log(error)
})


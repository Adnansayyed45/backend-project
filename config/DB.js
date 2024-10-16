const mongoose = require('mongoose')

const db = mongoose.connect("mongodb+srv://root:root@cluster0.58jw6.mongodb.net/comics?retryWrites=true&w=majority&appName=Cluster0",{
    useNewUrlParser: true, // useNewUrlParser: true: Ensures the new MongoDB URL parsing engine is used.
    useUnifiedTopology: true // useUnifiedTopology: true: Uses a newer server discovery and monitoring engine for better connection handling.
 }).then(()=>{
    console.log("Connected to MongoDB")
 }).catch((err)=>{
    console.log(err)
 })

 module.exports = db

 // mongodb+srv://root:<db_password>@cluster0.58jw6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 == from atlas 
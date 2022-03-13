require('dotenv').config({path:"./config.env"})
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://rudra:rudra@cluster0.lk4pf.mongodb.net/messengerapp?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
 })
    .then((conn) => console.log("connection successfull " + conn.connection.host))
    .catch((e)=>console.log(e.message))
    

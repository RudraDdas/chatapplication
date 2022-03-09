
const express = require("express")
const app = express()
const chats = require("./Data/data")
// var cors = require('cors')

// app.use(cors())
// app.use(express.json())
    
app.get("/", (req, res) => {
    res.send("api running")
})

app.get("/api", async(req, res) => {
    console.log("hitiing")
    res.status(200).send(chats)
})


app.get("/api/chat/:id", (req, res) => {
    const singleChat = chats.find(chats => chats._id === req.params.id)
    res.send(singleChat)
})


app.listen(8000, () => {
    console.log("listening to the port 8000")
})


const express = require("express")
const dotenv = require('dotenv')
require("./Db/conn")
dotenv.config({path:"./config.env"})
const app = express()
const chats = require("./Data/data")
const PORT = process.env.PORT || 8000
const userRouter = require("./routes/userRouter")


    // console.log(process.env.PORT)
// console.log(process.env.DB)

app.use(express.json())// to accept the json data from the server

app.use(userRouter)




app.use("/api/user" , userRouter)
// to accept the json data from the server
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


app.listen(PORT, () => {
    console.log(`listening to the port  ${PORT}`)
})

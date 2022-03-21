
const userModel = require("../models/userModel")
const generateToken = require("../Db/generateToken")


const resisterUser = async (req,res) => {
    try {
         const { name, email, password, pic } = req.body
          console.log("hitting")    
        if (!name || !email || !password) {
            res.status(400).send("please enter all the fields")
            throw new Error("please enter all the fields")
        }
           console.log(req.body.email)
        const existUser = await userModel.findOne({ Email: email })
        console.log(existUser)
            if (existUser) {
                res.status(400).send("email id already resistered")
                throw new Error("email id already resistered")
            } else { 
            const newUser= await userModel.create({
                Name: name,
                Email: email,
                password: password,
                image: pic
             })
                res.status(201).send({
                    Name: newUser.Name,
                    Email: newUser.Email,
                    _id: newUser._id,
                    image: newUser.image,
                    token:generateToken(newUser._id)
            })
                
            
        }
        
    
        
    } catch (error) {
        console.log(error)
    }
   


}

const authUser = (req, res) => {

    if (!req.body.email || !req.body.password) {
        res.status(400).send({ message: "must enter all the fields" })
        // throw new Error("must enter all the fields")
    }
   
    userModel.findOne({ Email: req.body.email })
        .then((user) => {
            if (user) {
            res.status(200).send(user)
        }
        })
    .catch(e=> console.log(e))
    
}

module.exports = { resisterUser , authUser} 
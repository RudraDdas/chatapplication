
const userModel = require("../models/userModel")
const generateToken = require("../Db/generateToken")
const bcrypt = require("bcryptjs/dist/bcrypt")

// resister user api
const resisterUser = async (req,res) => {
    try {
         const { name, email, password, pic } = req.body
        //   console.log("hitting")    
        if (!name || !email || !password) {
            res.status(400).send("please enter all the fields")
            // throw new Error("please enter all the fields")
        }
        //    console.log(req.body.email)
        const existUser = await userModel.findOne({ Email: email })
        // console.log(existUser)
            if (existUser) {
                res.status(401).send("email id already resistered")
                // throw new Error("email id already resistered")
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
                    password:newUser.password,
                    _id: newUser._id,
                    image: newUser.image,
                    token:generateToken(newUser._id)
            })
                
            
        }
        
    
        
    } catch (error) {
        console.log(error)
    }
   


}

//login api

const authUser = (req, res) => {

    if (!req.body.email || !req.body.password) {
        res.status(400).send({ message: "must enter all the fields" })
        // throw new Error("must enter all the fields")
    }
   
    userModel.findOne({ Email: req.body.email })
        .then((user) => {
            if (!user) {
            res.status(400).send({message:"email id not found"})
            } else {
                bcrypt.compare(req.body.password, user.password, (error, match) => {
                    if (error) {
                        res.status(500).send({message:'error'})
                    } else if (match) {
                        res.status(200).send({ 
                              Name: user.Name,
                              Email: user.Email,
                              password:user.password,
                              _id: user._id,
                              image: user.image,
                              token:generateToken(user._id)
                        })
                    } else {
                        res.status(500).send("credentials wrong")
                    }
                } )
            }
        })
      
    .catch(e=> console.log(e))
    
}

const allUsers =async (req,res ,next) => {
    try {
        //mongoquerry for finding all users
        const query_ = req.query.search ?
            {
                $or: [
                    { Name: { $regex: req.query.search, $options: "i" } },
                    {Email: {$regex: req.query.search, $options: "i"} }
                   ]
        }:{}
         
        const users = await userModel.find(query_).find({_id:{ $ne:req.user._id}}).select("-password -image")


        res.send(users)

    } catch (error) {
        console.log(error)
    }


}

module.exports = { resisterUser , authUser ,allUsers} 
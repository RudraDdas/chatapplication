const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel")


const protect = async (req, res, next) => {
    let token
    

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {

            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token, "rudramskmsdakndnalksnldkmalskmdalkmlknn")
            req.user = await userModel.findById(decoded.id).select("-password")
            console.log(req.user)

            next()
            
        } catch (error) {
            console.log(error)
        }
    }
    if (!token) {
        res.status(401)
        throw new Error("Not Authorized")
    }
}

module.exports = {protect}
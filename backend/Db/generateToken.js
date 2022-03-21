const jwt = require("jsonwebtoken")


const generateToken = (id) => {
    const token = jwt.sign({ id },"rudramskmsdakndnalksnldkmalskmdalkmlknn", {
        expiresIn:"30d"
    })
    return token
}

module.exports = generateToken
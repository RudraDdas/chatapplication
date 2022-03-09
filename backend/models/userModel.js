const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required:true
    },
    Email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    image: {
        type: String,
        required: true,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F285645%2Fuser_icon&psig=AOvVaw3KWKkoMyyzOQS6N9EfdyQw&ust=1646721717608000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCf-s2ys_YCFQAAAAAdAAAAABAK"
    },



},
    {
        timestamps:true
    }
)

const userModel = new mongoose.model("User", userSchema)

module.exports = userModel
const express = require("express")
const router = express.Router()
const resisterUser = require("../controller/userController")
const authUser = require("../controller/userController")


router.route("/api/user").post(resisterUser)
router.route("/login").post(authUser)

module.exports= router
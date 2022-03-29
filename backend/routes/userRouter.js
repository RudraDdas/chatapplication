const express = require("express")
const router = express.Router()
const {resisterUser , authUser} = require("../controller/userController")

router.route("/api/user/signup").post(resisterUser)
router.route("/api/user/login").post(authUser)

module.exports= router
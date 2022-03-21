const express = require("express")
const router = express.Router()
const {resisterUser , authUser} = require("../controller/userController")

router.route("/api/user").post(resisterUser)
router.route("/login").get(authUser)

module.exports= router
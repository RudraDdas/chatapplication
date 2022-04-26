const express = require("express")
const router = express.Router()
const { resisterUser, authUser, allUsers } = require("../controller/userController")
const {protect} = require("../middleware/authMiddleware")

router.route("/api/user/signup").post(resisterUser).get(protect,allUsers)
router.route("/api/user/login").post(authUser)



module.exports= router
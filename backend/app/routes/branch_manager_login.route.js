const express = require("express")
const managerLogin = require("../controllers/branch_manager_login.controller.js")


const router = express.Router()


router.route("/")
    .post(managerLogin.authenticate)


module.exports=router;
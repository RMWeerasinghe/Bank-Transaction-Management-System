const express = require("express")
const customerLogin = require("../controllers/customer_login.controller.js")


const router = express.Router()


router.route("/")
    .post(customerLogin.authenticate)


module.exports=router;
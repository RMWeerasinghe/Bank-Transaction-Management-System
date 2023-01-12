const express = require("express")
const employeeLogin = require("../controllers/employee_login.controller.js")


const router = express.Router()


router.route("/")
    .post(employeeLogin.authenticate)


module.exports=router;
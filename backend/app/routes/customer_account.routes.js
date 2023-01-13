const express=require("express");
const CustomerAccCont = require("../controllers/customer_account.controller.js");

const router = express.Router()


router.route("/:code")
    .get(CustomerAccCont.getAccByCode)

module.exports=router;
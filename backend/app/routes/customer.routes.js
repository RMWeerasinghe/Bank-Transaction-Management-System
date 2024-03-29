const express=require("express");
const CustomerController = require("../controllers/Customer.controller.js");
const auth =require('../middleware/auth.middleware')
const router = express.Router()

router.route("/")
    .get(CustomerController.getAllCustomers)
    .post(CustomerController.createNewCustomer)
    .put(CustomerController.updatePassword)

router.route("/:code")
    .get(CustomerController.getDetailsByCode)
    .delete(CustomerController.deleteByCode)
    .put(CustomerController.updateContactNo)

router.route("/accounts/:code")
    .get(CustomerController.getAccountDetails)
module.exports=router;

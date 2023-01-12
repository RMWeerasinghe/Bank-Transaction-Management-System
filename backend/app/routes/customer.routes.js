const express=require("express");
const CustomerController = require("../controllers/Customer.controller.js");

const router = express.Router()

router.route("/")
    .get(CustomerController.getAllCustomers)
    .post(CustomerController.createNewCustomer)
    .put(CustomerController.updatePassword)

router.route("/:code")
    .get(CustomerController.getDetailsByCode)
    .delete(CustomerController.deleteByCode)
    .put(CustomerController.updateContactNo)
module.exports=router;

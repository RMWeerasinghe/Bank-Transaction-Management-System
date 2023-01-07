const express=require("express");
const Individual_customerController = require("../controllers/individual_customer.controller.js");

const router = express.Router()

router.route("/")
    .get(Individual_customerController.getAllIndividual_customers)
    .post(Individual_customerController.createNewIndividual_customer)

router.route("/:code")
    .get(Individual_customerController.getDetailsByCode)
    .delete(Individual_customerController.deleteByCode)
module.exports=router;

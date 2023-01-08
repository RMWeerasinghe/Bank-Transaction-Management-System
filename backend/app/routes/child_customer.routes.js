const express = require("express");
const ChildCustomerController = require("../controllers/child_customer.controller.js");

const router = express.Router();

router.route("/")
  .get(ChildCustomerController.getAllChildCustomers)
  .post(ChildCustomerController.createNewChildCustomer);

router.route("/:customer_id")
  .get(ChildCustomerController.getDetailsByCustomerID)
  .put(ChildCustomerController.updateByCustomerID)
  .delete(ChildCustomerController.deleteByCustomerID);

module.exports = router;

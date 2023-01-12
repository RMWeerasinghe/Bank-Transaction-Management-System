const express=require("express");
const OrgController = require("../controllers/organization_customer.controller.js");

const router = express.Router()

router.route("/")
    .get(OrgController.getAllCustomers)
    .post(OrgController.createNewOrgCustomer)

router.route("/:id")
    .get(OrgController.getDetailsByID)
    .delete(OrgController.deleteByID)
    .put(OrgController.updateName)

module.exports=router;
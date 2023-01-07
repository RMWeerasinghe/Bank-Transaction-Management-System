const express=require("express");
const Loan_applicationController = require("../controllers/loan_application.controller.js");

const router = express.Router()

router.route("/")
    .get(Loan_applicationController.getAllLoan_applications)
    .post(Loan_applicationController.createNewLoan_application)

router.route("/:code")
    .get(Loan_applicationController.getDetailsByCode)
    .delete(Loan_applicationController.deleteByCode)
module.exports=router;

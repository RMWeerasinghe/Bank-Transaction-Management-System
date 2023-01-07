const express=require("express");
const LoanController = require("../controllers/loan.controller.js");

const router = express.Router()

router.route("/")
    .get(LoanController.getAllLoans)
    .post(LoanController.createNewLoan)

router.route("/:code")
    .get(LoanController.getDetailsByCode)
    .delete(LoanController.deleteByCode)
module.exports=router;

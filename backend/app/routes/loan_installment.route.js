const express=require("express");
const LoanInstallmentController = require("../controllers/loan_installment.controller.js");

const router = express.Router()

router.route("/")
    .get(LoanInstallmentController.getAllInstallments)
    .post(LoanInstallmentController.createNewInstallment)
    .put(LoanInstallmentController.updateStatus)

router.route("/:id")
    .get(LoanInstallmentController.getInstallmentByID)
    .delete(LoanInstallmentController.deleteByInstallmentID)


module.exports=router;
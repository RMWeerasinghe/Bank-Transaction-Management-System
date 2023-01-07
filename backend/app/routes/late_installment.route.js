const express=require("express");
const LateInstallmentController = require("../controllers/late_installment.controller.js");

const router = express.Router()

router.route("/")
    .get(LateInstallmentController.getAllLateInstallments)

router.route("/:code")
    .get(LateInstallmentController.getLateInstallmentByCode)


module.exports=router;
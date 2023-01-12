const express=require("express");
const SavAccController = require("../controllers/savings_account_controller.js");

const router = express.Router()

router.route("/")
    .get(SavAccController.getAllAccounts)
    .post(SavAccController.createNewSavingsAcc)

router.route("/:code")
    .get(SavAccController.getDetailsByAccNo)
    .delete(SavAccController.deleteByAccNo)
    .put(SavAccController.updateType)

module.exports=router;
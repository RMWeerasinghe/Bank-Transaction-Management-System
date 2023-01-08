const express = require("express");
const CurrentAccountController = require("../controllers/current_account.controller.js");

const router = express.Router();

router.route("/")
    .get(CurrentAccountController.getAllCurrentAccounts)
    .post(CurrentAccountController.createNewCurrentAccount);

router.route("/:account_no")
    .get(CurrentAccountController.getDetailsByAccountNo)
    .put(CurrentAccountController.updateBalanceByAccountNo)
    .delete(CurrentAccountController.deleteByAccountNo);

module.exports = router;

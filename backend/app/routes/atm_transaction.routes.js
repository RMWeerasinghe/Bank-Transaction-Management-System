const express = require("express");
const ATMTransactionController = require("../controllers/atm_transaction.controller.js");

const router = express.Router();

router.route("/")
  .get(ATMTransactionController.getAllTransactions)
  .post(ATMTransactionController.createNewTransaction);

router.route("/:transaction_id")
  .get(ATMTransactionController.getDetailsById)
  .delete(ATMTransactionController.deleteById);

module.exports = router;

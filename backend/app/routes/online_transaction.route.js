const express=require("express");
const TransactionController = require("../controllers/online_transaction.controller.js");

const router = express.Router()

router.route("/")
    .get(TransactionController.getAllOnlineTransactions)
    .post(TransactionController.transferFromSavings)

router.route("/:code")
    .get(TransactionController.getOnlineTransactionsByCode)


module.exports=router;
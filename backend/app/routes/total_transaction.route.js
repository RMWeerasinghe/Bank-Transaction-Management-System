const express=require("express");
const TotalTranController = require("../controllers/total_transaction.controller.js");

const router = express.Router()

router.route("/")
    .get(TotalTranController.getAllTransactions)

router.route("/:code")
    .get(TotalTranController.getTotalTransactionsByCode)


module.exports=router;
const express=require("express");
const AccountController = require("../controllers/account.controller.js");

const router = express.Router()

router.route("/")
    .get(AccountController.getAllAccounts)

router.route("/:no")
    .get(AccountController.getTypeByNo)
    .delete(AccountController.deleteByNo)
module.exports=router;
const express=require("express");
const SavAccTypeCtrl = require("../controllers/savings_acc_type.controller.js");

const router = express.Router()

router.route("/")
    .get(SavAccTypeCtrl.getAllTypes)
    .post(SavAccTypeCtrl.createNewType)

router.route("/:code")
    .get(SavAccTypeCtrl.getDetailsByType)
    .delete(SavAccTypeCtrl.deleteByType)
    .put(SavAccTypeCtrl.updateIntRate)

module.exports=router;
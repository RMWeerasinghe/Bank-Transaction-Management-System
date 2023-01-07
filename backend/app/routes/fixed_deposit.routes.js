const express=require("express");
const Fixed_depositController = require("../controllers/fixed_deposit.controller.js");

const router = express.Router()

router.route("/")
    .get(Fixed_depositController.getAllFixed_deposits)
    .post(Fixed_depositController.createNewFixed_deposit)

router.route("/:code")
    .get(Fixed_depositController.getDetailsByCode)
    .delete(Fixed_depositController.deleteByCode)
module.exports=router;

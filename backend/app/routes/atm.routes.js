const express = require("express");
const ATMController = require("../controllers/atm.controller.js");

const router = express.Router();

router.route("/")
  .get(ATMController.getAllATMs)
  .post(ATMController.createNewATM);

router.route("/:id")
  .get(ATMController.getDetailsById)
  .delete(ATMController.deleteById)
  

module.exports = router;

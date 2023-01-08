const express = require("express");
const BranchManagerController = require("../controllers/branch_manager.controller.js");

const router = express.Router();

router.route("/")
  .get(BranchManagerController.getAllManagers)
  .post(BranchManagerController.createNewManager);

router.route("/:branch_code")
  .get(BranchManagerController.getDetailsByBranchCode)
  .delete(BranchManagerController.deleteByBranchCode);

module.exports = router;

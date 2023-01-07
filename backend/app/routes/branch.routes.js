const express=require("express");
const BranchController = require("../controllers/branch.controller.js");

const router = express.Router()

router.route("/")
    .get(BranchController.getAllBranches)
    .post(BranchController.createNewBranch)

router.route("/:code")
    .get(BranchController.getDetailsByCode)
    .delete(BranchController.deleteByCode)
    .put(BranchController.updateContactNo)

module.exports=router;
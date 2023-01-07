const express=require("express");
const OnlineApplicationController = require("../controllers/online_loan_application.controller.js");

const router = express.Router()

router.route("/")
    .get(OnlineApplicationController.getAllOnlineApplications)
    .post(OnlineApplicationController.createNewOnlineApplication)

router.route("/:id")
    .get(OnlineApplicationController.getOnlineApplicationByCode)
    .delete(OnlineApplicationController.deleteByID)

module.exports=router;
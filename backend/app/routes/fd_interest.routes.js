const express=require("express");
const Fd_interestController = require("../controllers/fd_interest.controller.js");

const router = express.Router()

router.route("/")
    .get(Fd_interestController.getAllFd_interests)
    .post(Fd_interestController.createNewFd_interest)

router.route("/:code")
    .get(Fd_interestController.getDetailsByCode)
    .delete(Fd_interestController.deleteByCode)
module.exports=router;

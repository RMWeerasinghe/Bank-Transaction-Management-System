const express=require("express");
const EmployeeController = require("../controllers/employee.controller.js");

const router = express.Router()

router.route("/")
    .get(EmployeeController.getAllEmployees)
    .post(EmployeeController.createNewEmployee)

router.route("/:code")
    .get(EmployeeController.getDetailsByCode)
    .delete(EmployeeController.deleteByCode)
module.exports=router;

const Employee= require("../models/employee.model.js");


class EmployeeController {

    static async getAllEmployees(req, res) {

        Employee.getAllEmployees((err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong" })
            }

            return res.send(result)
        })
    }

    static async getDetailsByCode(req, res) {

        const employee_id = req.params.code

        Employee.getDetailsByCode(employee_id, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "Incorrect Employee ID" })
            }

            return res.send(result[0])
        })
    }

    static async createNewEmployee(req, res) {

        const { employee_id,emp_name,branch_code,contact_number,email,address_no,street,town,hash_password,salary } = req.body.employee

        const new_employee = new Employee(employee_id,emp_name,branch_code,contact_number,email,address_no,street,town,hash_password,salary)

        new_employee.createNewEmployee((err, result) => {

            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            return res.send(result)
        })
    }
    static async updateContactNo(req, res) {

        const employee_id = req.params.code
        const contact_number = req.body.contact_number


        Employee.updateContactNoByCode(employee_id,contact_number,(err, result) => {

            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            return res.send(result)
        })
    }
    
    static async deleteByCode(req, res) {

        const employee_id = req.params.code

        Employee.deleteByCode(employee_id, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "Incorrect Employee ID" })
            }

            return res.send(result)
        })
    }

    static async updatePassword(req,res){
        const {employee_id, password} = req.body

        Employee.updatePassword(employee_id,password,(err,result)=>{
            if (err){
                return res.status(500)
                    .send({Error:"something went wrong"})
            }
            return res.send(result)
        })
    }

}
module.exports= EmployeeController;

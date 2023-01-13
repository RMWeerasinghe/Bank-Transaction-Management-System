const Loan_application= require("../models/loan_application.model.js");

class Loan_applicationController {

    static async getAllLoan_applications(req, res) {

        Loan_application.getAllLoan_applications((err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong" })
            }

            return res.send(result)
        })
    }

    static async getDetailsByCode(req, res) {

        const application_id = req.params.code

        Loan_application.getDetailsByCode(application_id, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "Incorrect Application ID" })
            }

            return res.send(result[0])
        })
    }

    static async createNewLoan_application(req, res) {

        const { application_id,employee_id,branch_code,customer_id,amount,period_in_months,status } = req.body.LoanApplicant

        const new_loan_application = new Loan_application(application_id,employee_id,branch_code,customer_id,amount,period_in_months,status)

        new_loan_application.createNewLoan_application((err, result) => {

            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            return res.send(result)
        })
    }

    static async deleteByCode(req, res) {

        const application_id = req.params.code

        Loan_application.deleteByCode(application_id, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "Incorrect Application ID" })
            }

            return res.send(result)
        })
    }

}
module.exports= Loan_applicationController;

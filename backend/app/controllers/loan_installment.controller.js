const LoanInstallment= require("../models/loan_installment.model.js");

class LoanInstallmentController {

    static async getAllInstallments(req, res) {

        LoanInstallment.getAllInstallments((err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong" })
            }

            return res.send(result)
        })
    }

    static async getInstallmentByID(req, res) {

        const customer_id = req.params.id

        LoanInstallment.getInstallmentByID(customer_id, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "Incorrect Branch Code" })
            }

            return res.send(result[0])
        })
    }

    static async createNewInstallment(req, res) {

        const {loan_number,amount,paid_date,due_date,status,customer_id}=req.body


        const new_installment = new LoanInstallment(loan_number,amount,paid_date,due_date,status,customer_id)

        new_installment.createNewInstallment((err, result) => {

            if (err) {
                return res.status(500)
                    .send(err)
            }

            return res.send(result)
        })
    }
    static async updateStatus(req, res) {

        const {loan_number,customer_id}=req.body


        LoanInstallment.updateStatus(loan_number,customer_id,(err, result) => {

            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            return res.send(result)
        })
    }

    static async deleteByInstallmentID(req, res) {

        const installment_id = req.params.id

        LoanInstallment.deleteByInstallmentID(installment_id, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "Incorrect Branch Code" })
            }

            return res.send(result)
        })
    }

}
module.exports= LoanInstallmentController;
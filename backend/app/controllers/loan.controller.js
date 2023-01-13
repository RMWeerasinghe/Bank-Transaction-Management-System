const Loan= require("../models/loan.model.js");

class LoanController {

    static async getAllLoans(req, res) {

        Loan.getAllLoans((err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong" })
            }

            return res.send(result)
        })
    }

    static async getDetailsByCode(req, res) {

        const loan_no = req.params.code

        Loan.getDetailsByCode(loan_no, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "Incorrect Loan No" })
            }

            return res.send(result[0])
        })
    }

    static async createNewLoan(req, res) {

        const { loan_no,branch_code,customer_id,date_issued,period,amount,interest_rate } = req.body.Loan

        const new_loan = new Loan(loan_no,branch_code,customer_id,date_issued,period,amount,interest_rate)

        new_loan.createNewLoan((err, result) => {

            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            return res.send(result)
        })
    }

    static async deleteByCode(req, res) {

        const loan_no = req.params.code

        Loan.deleteByCode(loan_no, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "Incorrect Loan No" })
            }

            return res.send(result)
        })
    }

}
module.exports= LoanController;

const Savings= require("../models/savings_account.model.js");

class SavingsAccController {

    static async getAllAccounts(req, res) {

        Savings.getAllAccounts((err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong" })
            }

            return res.send(result)
        })
    }

    static async getDetailsByAccNo(req, res) {

        const account_no = req.params.code

        Savings.getDetailsByAccNo(account_no, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "Incorrect Account Number" })
            }

            return res.send(result[0])
        })
    }

    static async createNewSavingsAcc(req, res) {

        const {branch_code,balance,type,customer_id} = req.body


        const new_account = new Savings(branch_code,balance,type,customer_id)

        new_account.createNewAccount((err, result) => {

            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            return res.send(result)
        })
    }
    static async updateType(req, res) {

        const customer_id = req.params.code
        const type = req.body.type


        Savings.updateTypeByCustomerID(customer_id,type,(err, result) => {

            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            return res.send(result)
        })
    }

    static async deleteByAccNo(req, res) {

        const account_no = req.params.code

        Savings.deleteByAccNo(account_no, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "Incorrect Account No" })
            }

            return res.send(result)
        })
    }

}
module.exports= SavingsAccController;
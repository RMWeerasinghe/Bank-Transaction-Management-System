const TotalTransaction= require("../models/total_transaction.model.js");

class TotalTransactionController {

    static async getAllTransactions(req, res) {

        TotalTransaction.getAllTransactions((err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong" })
            }

            return res.send(result)
        })
    }

    static async getTotalTransactionsByCode(req, res) {
        const branch_code = req.params.code


        TotalTransaction.getAllByCode(branch_code, (err, result) => {
            if (err) {
                return res.status(500)
                    .send(err)
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "No transactions" })
            }

            return res.send(result)
        })
    }

}
module.exports= TotalTransactionController;
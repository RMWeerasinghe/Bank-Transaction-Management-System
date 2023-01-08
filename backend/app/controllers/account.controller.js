const Account= require("../models/account.model.js");

class AccountController {

    static async getAllAccounts(req, res) {

        Account.getAllAccounts((err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong" })
            }

            return res.send(result)
        })
    }

    static async getTypeByNo(req, res) {

        const account_no = req.params.no

        Account.getTypeByNo(account_no, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "Incorrect Account No" })
            }

            return res.send(result[0])
        })
    }



    static async deleteByNo(req, res) {

        const account_no = req.params.no

        Account.deleteByNo(account_no, (err, result) => {
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
module.exports= AccountController;
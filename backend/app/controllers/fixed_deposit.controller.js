const Fixed_deposit= require("../models/fixed_deposit.model.js");

class Fixed_depositController {

    static async getAllFixed_deposits(req, res) {

        Fixed_deposit.getAllFixed_deposits((err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong" })
            }

            return res.send(result)
        })
    }

    static async getDetailsByCode(req, res) {

        const fd_id = req.params.code

        Fixed_deposit.getDetailsByCode(fd_id, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "Incorrect FD ID" })
            }

            return res.send(result[0])
        })
    }

    static async createNewFixed_deposit(req, res) {

        const { fd_id,customer_id,branch_code,savings_acc_no,amount,date_opened,period_in_months,maturity_date } = req.body.Fixed_deposit

        const new_fixed_deposit = new Fixed_deposit(fd_id,customer_id,branch_code,savings_acc_no,amount,date_opened,period_in_months,maturity_dat)

        new_fixed_deposit.createNewFixed_deposit((err, result) => {

            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            return res.send(result)
        })
    }

    static async deleteByCode(req, res) {

        const fd_id = req.params.code

        Fixed_deposit.deleteByCode(fd_id, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "Incorrect FD_ID" })
            }

            return res.send(result)
        })
    }

}
module.exports= Fixed_depositController;

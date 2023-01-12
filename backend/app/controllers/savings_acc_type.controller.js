const SavAccType= require("../models/savings_acc_type.model.js");

class SavAccTypeController {

    static async getAllTypes(req, res) {

        SavAccType.getAllTypes((err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong" })
            }

            return res.send(result)
        })
    }

    static async getDetailsByType(req, res) {

        const type = req.params.code

        SavAccType.getDetailsByType(type, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "Incorrect Type" })
            }

            return res.send(result[0])
        })
    }

    static async createNewType(req, res) {

       const {type,interest_rate,min_balance,max_withdrawls}=req.body


        const new_type = new SavAccType(type,interest_rate,min_balance,max_withdrawls)

        new_type.createNewType((err, result) => {

            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            return res.send(result)
        })
    }
    static async updateIntRate(req, res) {

        const type = req.params.code
        const interest_rate = req.body.interest_rate


        SavAccType.updateIntRateByType(type,interest_rate,(err, result) => {

            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            return res.send(result)
        })
    }

    static async deleteByType(req, res) {

        const type = req.params.code

        SavAccType.deleteByType(type, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "Incorrect Type" })
            }

            return res.send(result)
        })
    }

}
module.exports= SavAccTypeController;
const LateInstallment= require("../models/late_installment.model.js");

class LateInstallmentController {

    static async getAllLateInstallments(req, res) {

        LateInstallment.getAllLateInstallments((err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong" })
            }

            return res.send(result)
        })
    }

    static async getLateInstallmentByCode(req, res) {

        const branch_code = req.params.code

        LateInstallment.getLateInstallmentByCode(branch_code, (err, result) => {
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
module.exports= LateInstallmentController;
const OnlineApplication= require("../models/online_loan_application.model.js");

class OnlineApplicationController {

    static async getAllOnlineApplications(req, res) {

        OnlineApplication.getAllOnlineApplications((err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong" })
            }

            return res.send(result)
        })
    }

    static async getOnlineApplicationByCode(req, res) {

        const branch_code = req.params.id

        OnlineApplication.getOnlineApplicationsByCode(branch_code, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "No loan applications" })
            }

            return res.send(result[0])
        })
    }

    static async createNewOnlineApplication(req, res) {

        const{branch_code,customer_id,amount,period_in_months,fd_id}=req.body.OnlineLoancustomer

        const new_application = new OnlineApplication(branch_code,customer_id,amount,period_in_months,fd_id)

        new_application.createNewOnlineLoanApplication((err, result) => {

            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            return res.send(result)
        })
    }

    static async deleteByID(req, res) {

        const application_id = req.params.id

        OnlineApplication.deleteByID(application_id, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "No Loan Applications" })
            }

            return res.send(result)
        })
    }

}
module.exports= OnlineApplicationController;
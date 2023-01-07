const Fd_interest= require("../models/fd_interest.model.js");

class Fd_interestController {

    static async getAllFd_interests(req, res) {

        Fd_interest.getAllFd_interests((err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong" })
            }

            return res.send(result)
        })
    }

    static async getDetailsByCode(req, res) {

        const period_in_months = req.params.code

        Fd_interest.getDetailsByCode(period_in_months, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "Incorrect Period in Months" })
            }

            return res.send(result[0])
        })
    }

    static async createNewFd_interest(req, res) {

        const { period_in_months,interest_rate } = req.body

        const new_fd_interest = new Fd_interest(period_in_months,interest_rate)

        new_fd_interest.createNewFd_interest((err, result) => {

            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            return res.send(result)
        })
    }

    static async deleteByCode(req, res) {

        const period_in_months = req.params.code

        Fd_interest.deleteByCode(period_in_months, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "Incorrect Period in Months" })
            }

            return res.send(result)
        })
    }

}
module.exports= Fd_interestController;

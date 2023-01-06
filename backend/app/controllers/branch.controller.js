const Branch= require("../models/branch.model.js");

class BranchController {

    static async getAllBranches(req, res) {

        Branch.getAllBranches((err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong" })
            }

            return res.send(result)
        })
    }

    static async getDetailsByCode(req, res) {

        const branch_code = req.params.code

        Branch.getDetailsByCode(branch_code, (err, result) => {
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

    static async createNewBranch(req, res) {

        const { branch_code,branch_name,branch_city,contact_number,email } = req.body

        const new_branch = new Branch(branch_code,branch_name,branch_city,contact_number,email)

        new_branch.createNewBranch((err, result) => {

            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            return res.send(result)
        })
    }

    static async deleteByCode(req, res) {

        const branch_code = req.params.code

        Branch.deleteByCode(branch_code, (err, result) => {
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
module.exports= BranchController;
const Branch= require("../models/branch.model.js");

class BranchController {

    static async getAllBranches(req, res) {

        Branch.getAllBranches((err, result) => {
            if (err) {
                return res.status(500)
                    .send(err)
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

        const branch_code=req.body.branch_code;
        const branch_name=req.body.branch_name;
        const branch_city=req.body.branch_city;
        const contact_number=req.body.contact_number;
        const email = req.body.email;


        const new_branch = new Branch(branch_code,branch_name,branch_city,contact_number,email)

        new_branch.createNewBranch((err, result) => {

            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            return res.send(result)
        })
    }
    static async updateContactNo(req, res) {

        const branch_code = req.params.code
        const contact_number = req.body.contact_number


        Branch.updateContactNoByCode(branch_code,contact_number,(err, result) => {

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
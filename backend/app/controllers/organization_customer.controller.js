const OrgCustomer= require("../models/organization_customer.model.js");

class OrgCustomerController {

    static async getAllCustomers(req, res) {

        OrgCustomer.getAllCustomers((err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong" })
            }

            return res.send(result)
        })
    }

    static async getDetailsByID(req, res) {

        const customer_id = req.params.id

        OrgCustomer.getDetailsByID(customer_id, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "Incorrect customer id" })
            }

            return res.send(result[0])
        })
    }

    static async createNewOrgCustomer(req, res) {
        console.log("backend create")

        const {name,reg_no}=req.body.orgCustomer
        console.log(reqq.body.orgCustomer)

        const new_customer = new OrgCustomer(name,reg_no)

        new_customer.createNewOrgCustomer((err, result) => {

            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            return res.send(result)
        })
    }
    static async updateName(req, res) {

        const customer_id = req.params.id
        const name = req.body.contact_number


        OrgCustomer.updateNameByID(customer_id,name,(err, result) => {

            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            return res.send(result)
        })
    }

    static async deleteByID(req, res) {

        const branch_code = req.params.id

        OrgCustomer.deleteByID(branch_code, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "Incorrect customer id" })
            }

            return res.send(result)
        })
    }

}
module.exports= OrgCustomerController;
const Individual_customer= require("../models/individual_customer.model.js");

class Individual_customerController {

    static async getAllIndividual_customers(req, res) {

        Individual_customer.getAllIndividual_customers((err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong" })
            }

            return res.send(result)
        })
    }

    static async getDetailsByCode(req, res) {

        const customer_id = req.params.code

        Individual_customer.getDetailsByCode(customer_id, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "Incorrect Customer ID" })
            }

            return res.send(result[0])
        })
    }

    static async createNewIndividual_customer(req, res) {

        const { customer_id,NIC,first_name,middle_name,last_name,date_of_birth,gender,nationality } = req.body.indivCustomer

        const new_individual_customer = new Individual_customer(customer_id,NIC,first_name,middle_name,last_name,date_of_birth,gender,nationality)

        new_individual_customer.createNewIndividual_customer((err, result) => {

            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            return res.send(result)
        })
    }

    static async deleteByCode(req, res) {

        const customer_id = req.params.code

        Individual_customer.deleteByCode(customer_id, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "Incorrect Customer ID" })
            }

            return res.send(result)
        })
    }

}
module.exports= Individual_customerController;

const Customer= require("../models/customer.model.js");

class CustomerController {

    static async getAllCustomers(req, res) {

        Customer.getAllCustomers((err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong" })
            }

            return res.send(result)
        })
    }

    static async getDetailsByCode(req, res) {

        const customer_id = req.params.code

        Customer.getDetailsByCode(customer_id, (err, result) => {
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

    static async createNewCustomer(req, res) {

        const { customer_id,contact_number,email,type,address_no,street,town,hash_password } = req.body

        const new_customer = new Customer(customer_id,contact_number,email,type,address_no,street,town,hash_password)

        new_customer.createNewCustomer((err, result) => {

            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            return res.send(result)
        })
    }
    
    static async updateContactNo(req, res) {

        const customer_id = req.params.code
        const contact_number = req.body.contact_number


        Customer.updateContactNoByCode(customer_id,contact_number,(err, result) => {

            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            return res.send(result)
        })
    }

    static async deleteByCode(req, res) {

        const customer_id = req.params.code

        Customer.deleteByCode(customer_id, (err, result) => {
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

    static async updatePassword(req,res){
        const {customer_id, password} = req.body

        Customer.updatePassword(customer_id,password,(err,result)=>{
            if (err){
                return res.status(500)
                    .send({Error:"something went wrong"})
            }
            return res.send(result)
        })
    }

}
module.exports= CustomerController;

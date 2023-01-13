const CustomerAcc= require("../models/customer_account.model.js");

class CustomerAccController {


    static async getAccByCode(req, res) {

        const customer_id = req.params.code

        CustomerAcc.getAllByCustomerID(customer_id, (err, result) => {
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
module.exports= CustomerAccController;
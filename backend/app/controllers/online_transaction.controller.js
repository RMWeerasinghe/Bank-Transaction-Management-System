const OnlineTransaction= require("../models/online_transaction.model.js");

class OnlineTransactionController {

    static async getAllOnlineTransactions(req, res) {

        OnlineTransaction.getAllOnlineTransactions((err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong" })
            }

            return res.send(result)
        })
    }

    static async getOnlineTransactionsByCode(req, res) {

        const branch_code = req.params.code

        OnlineTransaction.getOnlineTransactionsByCode(branch_code, (err, result) => {
            if (err) {
                return res.status(500)
                    .send({ error: "Something went wrong." })
            }

            if (result.length === 0) {
                return res.status(404)
                    .send({ error: "No Transactions" })
            }

            return res.send(result)
        })
    }

    static async transferFromSavings(req, res) {

        const{from_acc,to_acc,amount}=req.body

        const new_application = new OnlineTransaction(from_acc,to_acc,amount)

        new_application.transferFromSavings((err,result)=>{
            if (err){
                return res.status(500)
                    .send({Error:"Something went wrong"})
            }

            return res.send(result)

        })
    }



}
module.exports= OnlineTransactionController;
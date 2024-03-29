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

    static async transferOnline(req, res) {
        console.log("online transaction")
        console.log(req.body.onlineTransaction)
        const{from_acc,to_acc,amount}=req.body.onlineTransaction

        const new_transaction = new OnlineTransaction(from_acc,to_acc,amount)

        new_transaction.transferFromSavings((err,result)=>{
            console.log(err,result)
            if (err){
                return res.status(500)
                    .send({Error:"Something went wrong"})
            }

            return res.send(result)

        })
    }



}
module.exports= OnlineTransactionController;
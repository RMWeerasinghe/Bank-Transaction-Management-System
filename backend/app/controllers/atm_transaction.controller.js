const ATMTransaction = require("../models/atm_transaction.model.js");

class ATMTransactionController {
  static async getAllTransactions(req, res) {
    ATMTransaction.getAllTransactions((err, result) => {
      if (err) {
        return res.status(500)
            .send({ error: "Something went wrong" });
      }

      return res.send(result);
    });
  }

  static async getDetailsByAccountNo(req, res) {
    const account_no = req.params.id;
    

    ATMTransaction.getDetailsByAccountNo(account_no, (err, result) => {
      if (err) {
        return res.status(500).send({ error: "Something went wrong." });
      }

      if (result.length === 0) {
        return res.status(404).send({ error: "Incorrect ATM Transaction ID" });
      }

      return res.send(result[0]);
    });
  }

  static async createNewTransaction(req, res) {
    const { account_no,atm_id, amount,type } = req.body.atmtransaction;

    const new_transaction = new ATMTransaction(account_no,atm_id, amount,type);

    new_transaction.createNewTransaction((err, result) => {
      if (err) {
        return res.status(500).send({ error: "Something went wrong." });
      }

      return res.send(result);
    });
  }

  static async deleteById(req, res) {
    const id = req.params.id;

    ATMTransaction.deleteById(id, (err, result) => {
      if (err) {
        return res.status(500).send({ error: "Something went wrong." });
      }

      if (result.length === 0) {
        return res.status(404).send({ error: "Incorrect ATM Transaction ID" });
      }

      return res.send(result);
    });
  }
  static async transferATM(req, res) {
    console.log(req.body.atmtransaction)
    const{account_no,atm_id, amount ,type}=req.body.atmtransaction

    const new_transaction = new ATMTransaction(account_no,atm_id, amount ,type)

    new_transaction.atmTransfer((err,result)=>{
      console.log(err,result)
      if (err){
        return res.status(500)
            .send({Error:"Something went wrong"})
      }

      return res.send(result)

    })
  }
}

module.exports = ATMTransactionController;

const ATMTransaction = require("./models/atm_transaction.model.js");

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

  static async getDetailsById(req, res) {
    const id = req.params.id;

    ATMTransaction.getDetailsById(id, (err, result) => {
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
    const { atm_id, amount, transaction_time, type } = req.body;

    const new_transaction = new ATMTransaction(atm_id, amount, transaction_time, type);

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
}

module.exports = ATMTransactionController;

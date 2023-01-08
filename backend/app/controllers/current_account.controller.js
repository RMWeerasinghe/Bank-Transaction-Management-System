const CurrentAccount = require("../models/current_account.model.js");

class CurrentAccountController {
  static async getAllCurrentAccounts(req, res) {
    CurrentAccount.getAllCurrentAccounts((err, result) => {
      if (err) {
        return res.status(500).send({ error: "Something went wrong." });
      }

      return res.send(result);
    });
  }

  static async getDetailsByAccountNo(req, res) {
    const account_no = req.params.account_no;

    CurrentAccount.getDetailsByAccountNo(account_no, (err, result) => {
      if (err) {
        return res.status(500).send({ error: "Something went wrong." });
      }

      if (result.length === 0) {
        return res.status(404).send({ error: "Incorrect Account No" });
      }

      return res.send(result[0]);
    });
  }

  static async createNewCurrentAccount(req, res) {
    const { account_no, branch_code, balance, customer_id } = req.body;

    const new_current_account = new CurrentAccount(
      account_no,
      branch_code,
      balance,
      customer_id
    );

    new_current_account.createNewCurrentAccount((err, result) => {
      if (err) {
        return res.status(500).send({ error: "Something went wrong." });
      }

      return res.send(result);
    });
  }

  static async updateBalanceByAccountNo(req, res) {
    const { account_no, balance } = req.body;

    const updated_current_account = new CurrentAccount(account_no, "", balance);

    updated_current_account.updateBalanceByAccountNo((err, result) => {
        if (err) {
            return res.status(500).send({ error: "Something went wrong." });
          }
    
          return res.send(result);
        });
      }
    
      static async deleteByAccountNo(req, res) {
        const account_no = req.params.account_no;
    
        CurrentAccount.deleteByAccountNo(account_no, (err, result) => {
          if (err) {
            return res.status(500).send({ error: "Something went wrong." });
          }
    
          if (result.length === 0) {
            return res.status(404).send({ error: "Incorrect Account No" });
          }
    
          return res.send(result);
        });
      }
    }
    
    module.exports = CurrentAccountController;
    
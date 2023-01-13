const pool = require("../config/database.js");

class CurrentAccount {
  constructor(branch_code, balance, customer_id) {
    this.branch_code = branch_code;
    this.balance = balance;
    this.customer_id = customer_id;
  }

  static getAllCurrentAccounts(response) {
    pool.query("SELECT * FROM current_account", response);
  }

  static getDetailsByAccountNo(account_no, response) {
    pool.query(
      "SELECT * FROM current_account WHERE account_no = ?",
      [account_no],
      response
    );
  }

  createNewCurrentAccount(response) {
    pool.query(
      `INSERT INTO current_account(branch_code,balance,customer_id)
      VALUES (?,?,?)`,
      [this.branch_code, this.balance, this.customer_id],
      response
    );
  }

  updateBalanceByAccountNo(response) {
    pool.query(
      "UPDATE current_account SET balance = ? WHERE account_no = ?",
      [this.balance, this.account_no],
      response
    );
  }

  static deleteByAccountNo(account_no, response) {
    pool.query(
      "DELETE FROM current_account WHERE account_no = ?",
      [account_no],
      response
    );
  }
}

module.exports = CurrentAccount;

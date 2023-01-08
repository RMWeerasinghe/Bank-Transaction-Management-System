const pool = require("../config/database.js");

class ATMTransaction {
  constructor(atm_id, amount, transaction_time, type) {
    this.atm_id = atm_id;
    this.amount = amount;
    this.transaction_time = transaction_time;
    this.type = type;
  }

  static getAllTransactions(response) {
    pool.query("SELECT * FROM atm_transaction", response);
  }

  static getDetailsById(id, response) {
    pool.query(
      "SELECT * FROM atm_transaction WHERE id=?",
      [id],
      response
    );
  }

  createNewTransaction(response) {
    pool.query(
      `INSERT INTO atm_transaction
            VALUES (?,?,?,?)`,
      [this.atm_id, this.amount, this.transaction_time, this.type],
      response
    );
  }

  static deleteById(id, response) {
    pool.query(
      `DELETE FROM atm_transaction WHERE id = ?`,
      [id],
      response
    );
  }
}

module.exports = ATMTransaction;

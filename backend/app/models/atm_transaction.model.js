const pool = require("../config/database.js");

class ATMTransaction {
  constructor(account_no,atm_id, amount ,type) {
    this.account_no=account_no;
    this.atm_id = atm_id;
    this.amount = amount;
    this.type = type;
  }

  static getAllTransactions(response) {
    pool.query("SELECT * FROM atm_transaction", response);
  }

  static getDetailsByAccountNo(account_no, response) {
    pool.query(
      "SELECT * FROM atm_transaction WHERE account_no=?",
      [account_no],
      response
    );
  }

  createNewTransaction(response) {
    pool.query(
      `INSERT INTO atm_transaction
            VALUES (?,?,?,?)`,
      [this.account_no,this.atm_id, this.amount, this.type],
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
  atmTransfer(response){
    if (this.type==='deposit'){
      console.log("deposit")
      pool.query('call debitFromATM(?,?,?)',
          [this.atm_id,this.account_no,this.amount],
          response
      )
    }
    if (this.type==='withdrawl'){
      pool.query('call withdrawFromATM(?,?,?)',
          [this.atm_id,this.account_no,this.amount],
          response)
    }
  }

}

module.exports = ATMTransaction;

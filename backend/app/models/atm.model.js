const pool = require("../config/database.js");

class ATM {
  constructor(atm_id, town, branch_code) {
    this.atm_id = atm_id;
    this.town = town;
    this.branch_code = branch_code;
  }

  static getAllATMs(response) {
    pool.query("SELECT * FROM atm", response);
  }

  static getDetailsById(atm_id, response) {
    pool.query(
      "SELECT * FROM atm WHERE atm_id=?",
      [atm_id],
      response
    );
  }

  createNewATM(response) {
    pool.query(
      `INSERT INTO atm
            VALUES (?,?,?)`,
      [this.atm_id, this.town, this.branch_code],
      response
    );
  }

  static deleteById(atm_id, response) {
    pool.query(
      `DELETE FROM atm WHERE atm_id = ?`,
      [atm_id],
      response
    );
  }


}

module.exports = ATM;

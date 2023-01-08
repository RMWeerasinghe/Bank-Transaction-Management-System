const pool = require("../config/database.js");

class BranchManager {
  constructor(branch_code, employee_id) {
    this.branch_code = branch_code;
    this.employee_id = employee_id;
  }

  static getAllManagers(response) {
    pool.query("SELECT * FROM branch_manager", response);
  }

  static getDetailsByBranchCode(branch_code, response) {
    pool.query(
      "SELECT * FROM branch_manager WHERE branch_code=?",
      [branch_code],
      response
    );
  }

  createNewManager(response) {
    pool.query(
      `INSERT INTO branch_manager
            VALUES (?,?)`,
      [this.branch_code, this.employee_id],
      response
    );
  }

  static deleteByBranchCode(branch_code, response) {
    pool.query(
      `DELETE FROM branch_manager WHERE branch_code = ?`,
      [branch_code],
      response
    );
  }
}

module.exports = BranchManager;

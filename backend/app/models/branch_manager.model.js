const pool = require("../config/database.js");
const bcrypt = require("bcrypt");

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




  static findManager(employee_id,response){
    pool.query('SELECT * FROM branch_manager_info where employee_id=?',
        [employee_id],
        response)
  }

}

module.exports = BranchManager;

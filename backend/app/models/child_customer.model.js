const pool = require("../config/database.js");

class ChildCustomer {
  constructor(

    first_name,
    middle_name,
    last_name,
    date_of_birth,
    gender,
    nationality,
    guardian_first_name,
    guardian_middle_name,
    guardian_last_name,
    guardian_NIC
  ) {

    this.first_name = first_name;
    this.middle_name = middle_name;
    this.last_name = last_name;
    this.date_of_birth = date_of_birth;
    this.gender = gender;
    this.nationality = nationality;
    this.guardian_first_name = guardian_first_name;
    this.guardian_middle_name = guardian_middle_name;
    this.guardian_last_name = guardian_last_name;
    this.guardian_NIC = guardian_NIC;
  }

  static getAllChildCustomers(response) {
    pool.query("SELECT * FROM child_customer", response);
  }

  static getDetailsByCustomerID(customer_id, response) {
    pool.query(
      "SELECT * FROM child_customer WHERE customer_id = ?",
      [customer_id],
      response
    );
  }

  createNewChildCustomer(response) {
    pool.query(
      `INSERT INTO child_customer(first_name,
                                  middle_name,
                                  last_name,
                                  date_of_birth,
                                  gender,
                                  nationality,
                                  guardian_first_name,
                                  guardian_middle_name,
                                  guardian_last_name,
                                  guardian_NIC)
      VALUES (?,?,?,?,?,?,?,?,?,?)`,
      [

        this.first_name,
        this.middle_name,
        this.last_name,
        this.date_of_birth,
        this.gender,
        this.nationality,
        this.guardian_first_name,
        this.guardian_middle_name,
        this.guardian_last_name,
        this.guardian_NIC
      ],
      response
    );
  }

  updateByCustomerID(customer_id,response) {
    pool.query(
      `UPDATE child_customer
      SET first_name = ?,
      middle_name = ?,
      last_name = ?,
      date_of_birth = ?,
      gender = ?,
      nationality = ?,
      guardian_first_name = ?,
      guardian_middle_name = ?,
      guardian_last_name = ?,
      guardian_NIC = ?
      WHERE customer_id = ?`,
      [
        this.first_name,
        this.middle_name,
        this.last_name,
        this.date_of_birth,
        this.gender,
        this.nationality,
        this.guardian_first_name,
        this.guardian_middle_name,
        this.guardian_last_name,
        this.guardian_NIC,
          customer_id

      ],
      response
    );
  }

  static deleteByCustomerID(customer_id, response) {
    pool.query(
      "DELETE FROM child_customer WHERE customer_id = ?",
      [customer_id],
      response
    );
  }
}

module.exports = ChildCustomer;

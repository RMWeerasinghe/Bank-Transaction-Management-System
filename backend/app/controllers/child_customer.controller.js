const ChildCustomer = require("../models/child_customer.model.js");

class ChildCustomerController {
  static async getAllChildCustomers(req, res) {
    ChildCustomer.getAllChildCustomers((err, result) => {
      if (err) {
        return res.status(500).send({ error: "Something went wrong" });
      }

      return res.send(result);
    });
  }

  static async getDetailsByCustomerID(req, res) {
    const customer_id = req.params.customer_id;

    ChildCustomer.getDetailsByCustomerID(customer_id, (err, result) => {
      if (err) {
        return res.status(500).send({ error: "Something went wrong." });
      }

      if (result.length === 0) {
        return res.status(404).send({ error: "Incorrect Customer ID" });
      }

      return res.send(result[0]);
    });
  }

  static async createNewChildCustomer(req, res) {
    const {
      customer_id,
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
    } = req.body;

    const new_child_customer = new ChildCustomer(
      customer_id,
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
    );

    new_child_customer.createNewChildCustomer((err, result) => {
      if (err) {
        return res.status(500).send({ error: "Something went wrong." });
      }

      return res.send(result);
    });
  }

  static async updateByCustomerID(req, res) {
    const customer_id = req.params.customer_id;
    const {
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
    } = req.body;

    const updated_child_customer = new ChildCustomer(
      customer_id,
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
    );

    updated_child_customer.updateByCustomerID((err, result) => {
      if (err) {
        return res.status(500).send({ error: "Something went wrong." });
      }

      if (result.length === 0) {
        return res.status(404).send({ error: "Incorrect Customer ID" });
      }

      return res.send(result);
    });
  }

  static async deleteByCustomerID(req, res) {
    const customer_id = req.params.customer_id;

    ChildCustomer.deleteByCustomerID(customer_id, (err, result) => {
      if (err) {
        return res.status(500).send({ error: "Something went wrong." });
      }

      if (result.length === 0) {
        return res.status(404).send({ error: "Incorrect Customer ID" });
      }

      return res.send(result);
    });
  }
}

module.exports = ChildCustomerController;

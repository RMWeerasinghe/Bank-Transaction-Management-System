const BranchManager = require("../models/branch_manager.model.js");

class BranchManagerController {
  static async getAllManagers(req, res) {
    BranchManager.getAllManagers((err, result) => {
      if (err) {
        return res.status(500).send({ error: "Something went wrong" });
      }

      return res.send(result);
    });
  }

  static async getDetailsByBranchCode(req, res) {
    const branch_code = req.params.branch_code;

    BranchManager.getDetailsByBranchCode(branch_code, (err, result) => {
      if (err) {
        return res.status(500).send({ error: "Something went wrong." });
      }

      if (result.length === 0) {
        return res.status(404).send({ error: "Incorrect Branch Code" });
      }

      return res.send(result[0]);
    });
  }

  static async createNewManager(req, res) {
    const { branch_code, employee_id } = req.body;

    const new_manager = new BranchManager(branch_code, employee_id);

    new_manager.createNewManager((err, result) => {
      if (err) {
        return res.status(500).send({ error: "Something went wrong." });
      }

      return res.send(result);
    });
  }

  static async deleteByBranchCode(req, res) {
    const branch_code = req.params.branch_code;

    BranchManager.deleteByBranchCode(branch_code, (err, result) => {
      if (err) {
        return res.status(500).send({ error: "Something went wrong." });
      }

      if (result.length === 0) {
        return res.status(404).send({ error: "Incorrect Branch Code" });
      }

      return res.send(result);
    });
  }
}

module.exports = BranchManagerController;

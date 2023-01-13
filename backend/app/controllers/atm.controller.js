const ATM = require("../models/atm.model.js");

class ATMController {
  static async getAllATMs(req, res) {
    ATM.getAllATMs((err, result) => {
      if (err) {
        return res.status(500).send({ error: "Something went wrong" });
      }

      return res.send(result);
    });
  }

  static async getDetailsById(req, res) {
    const atm_id = req.params.id;

    ATM.getDetailsById(atm_id, (err, result) => {
      if (err) {
        return res.status(500).send({ error: "Something went wrong." });
      }

      if (result.length === 0) {
        return res.status(404).send({ error: "Incorrect ATM ID" });
      }

      return res.send(result[0]);
    });
  }

  static async createNewATM(req, res) {
    const { atm_id, town, branch_code } = req.body.atm;

    const new_atm = new ATM(atm_id, town, branch_code);

    new_atm.createNewATM((err, result) => {
      if (err) {
        return res.status(500).send({ error: "Something went wrong." });
      }

      return res.send(result);
    });
  }

  static async deleteById(req, res) {
    const atm_id = req.params.id;

    ATM.deleteById(atm_id, (err, result) => {
      if (err) {
        return res.status(500).send({ error: "Something went wrong." });
      }

      if (result.length === 0) {
        return res.status(404).send({ error: "Incorrect ATM ID" });
      }

      return res.send(result);
    });
  }

  static async updateById(req, res) {
    const atm_id = req.params.id;
    const { town, branch_code } = req.body;

    ATM.updateById(atm_id, town, branch_code, (err, result) => {
      if (err) {
        return res.status(500).send({ error: "Something went wrong." });
      }

      if (result.length === 0) {
        return res.status(404).send({ error: "Incorrect ATM ID" });
      }

      return res.send(result);
    });
  }
}

module.exports = ATMController;

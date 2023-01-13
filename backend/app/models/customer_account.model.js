const pool = require("../config/database.js");


class CustomerAccount {

    static getAllByCustomerID(customer_id, response) {
        pool.query(
            "SELECT * FROM customer_account WHERE customer_id=?",
            [customer_id],
            response
        );
    }

}

module.exports = CustomerAccount;

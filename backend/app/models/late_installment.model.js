const pool =require("../config/database.js");

class LateInstallment {


    static getAllLateInstallments(response) {
        pool.query(
            "SELECT * FROM late_installment ",
            response
        )
    }

    static getLateInstallmentByCode(branch_code, response) {
        pool.query(
            "SELECT * FROM late_installment WHERE branch_code=? ",
            [branch_code],
            response
        )
    }

}
module.exports= LateInstallment;
const pool =require("../config/database.js");

class OnlineLoanApplication{


    constructor(branch_code,customer_id,amount,period_in_months,fd_id) {
        this.branch_code=branch_code;
        this.customer_id=customer_id;
        this.amount=amount;
        this.period_in_months=period_in_months;
        this.fd_id=fd_id;
    }

    static  getAllOnlineApplications(response){
        pool.query(
            "SELECT * FROM online_loan_application",
            response
        )
    }

    static getOnlineApplicationsByCode(branch_code,response){
        pool.query(
            "SELECT * FROM online_loan_application WHERE branch_code=? ",
            [branch_code],
            response
        )
    }

    createNewOnlineLoanApplication(response) {
        pool.query(
            `INSERT INTO online_loan_application(branch_code,customer_id,amount,period_in_months,fd_id)
            VALUES (?,?,?,?,?,?)`,
            [this.branch_code,this.customer_id,this.amount,this.period_in_months,this.fd_id],
            response
        )

    }

    static deleteByID(application_id, response) {
        pool.query(
            `DELETE FROM online_loan_application WHERE application_id = ?`,
            [application_id],
            response
        )
    }


}

module.exports= OnlineLoanApplication;
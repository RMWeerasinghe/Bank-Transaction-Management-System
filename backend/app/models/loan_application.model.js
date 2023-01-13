const pool =require("../config/database.js");

class Loan_application{


    constructor(application_id,employee_id,branch_code,customer_id,amount,period_in_months,status) {
        this.application_id=application_id;
        this.employee_id=employee_id;
        this.branch_code=branch_code;
        this.customer_id=customer_id;
        this.amount=amount;
        this.period_in_months=period_in_months;
        this.status=status;
    }

    static  getAllLoan_applications(response){
        pool.query(
            "SELECT * FROM loan_application",
            response
        )
    }

    static getDetailsByCode(application_id,response){
        pool.query(
            "SELECT * FROM loan_application WHERE application_id=? ",
            [application_id],
            response
        )
    }

    createNewLoan_application(response) {
        pool.query(
            `INSERT INTO loan_application
            VALUES (?,?,?,?,?,?)`,
            [this.application_id,this.employee_id,this.branch_code,this.customer_id,this.amount,this.period_in_months],
            response
        )

    }

    static updateStatusByCode(application_id,status,response){
        pool.query(
            "UPDATE loan_application set status=? WHERE application_id=?",
            [status,application_id],
            response
        )
    }


    static deleteByCode(application_id, response) {
        pool.query(
            `DELETE FROM loan_application WHERE application_id = ?`,
            [application_id],
            response
        )
    }


}

module.exports= Loan_application;

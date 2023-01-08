const pool =require("../config/database.js");

class Loan{


    constructor(loan_no,branch_code,customer_id,date_issued,period,amount,interest_rate) {
        this.loan_no=loan_no;
        this.branch_code=branch_code;
        this.customer_id=customer_id;
        this.date_issued=date_issued;
        this.period=period;
        this.amount=amount;
        this.interest_rate=interest_rate;
    }

    static  getAllLoan(response){
        pool.query(
            "SELECT * FROM loan",
            response
        )
    }

    static getDetailsByCode(loan_no,response){
        pool.query(
            "SELECT * FROM loan WHERE loan_no=? ",
            [loan_no],
            response
        )
    }

    createNewLoan(response) {
        pool.query(
            `INSERT INTO loan
            VALUES (?,?,?,?,?,?,?,)`,
            [this.loan_no,this.branch_code,this.customer_id,this.date_issued,this.period,this.amount,this.interest_rate],
            response
        )

    }


    static deleteByCode(loan_no, response) {
        pool.query(
            `DELETE FROM loan WHERE loan_no = ?`,
            [loan_no],
            response
        )
    }


}

module.exports= Loan;

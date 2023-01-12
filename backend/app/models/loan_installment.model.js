const pool =require("../config/database.js");

class LoanInstallment{


    constructor(loan_number,amount,paid_date,due_date,status,customer_id) {
        this.loan_number=loan_number;
        this.amount=amount;
        this.paid_date=paid_date;
        this.due_date=due_date;
        this.status=status;
        this.customer_id=customer_id;
    }

    static  getAllInstallments(response){
        pool.query(
            "SELECT * FROM loan_installment ",
            response
        )
    }

    static getInstallmentByID(customer_id,response){
        pool.query(
            "SELECT * FROM loan_installments WHERE customer_id=? ",
            [customer_id],
            response
        )
    }

    createNewInstallment(response) {
        pool.query(
            `INSERT INTO loan_installment(loan_no,amount,paid_date,due_date,status,customer_id)
            VALUES (?,?,?,?,?,?)`,
            [this.loan_number,this.amount,this.paid_date,this.due_date,this.status,this.customer_id],
            response
        )

    }

    static updateStatus(loan_number,customer_id,response){
        const status = "paid"
        pool.query(
            "UPDATE loan_installment set status=? , paid_date=current_date() WHERE loan_number=? and customer_id=?",
            [status,loan_number,customer_id],
            response
        )
    }


    static deleteByInstallmentID(installment_id, response) {
        pool.query(
            `DELETE FROM loan_installment WHERE installment_id = ?`,
            [installment_id],
            response
        )
    }


}

module.exports= LoanInstallment;
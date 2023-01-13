const pool =require("../config/database.js");

class Fixed_deposit{


    constructor(customer_id,branch_code,savings_acc_no,amount,date_opened,period_in_months) {

        this.customer_id=customer_id;
        this.branch_code=branch_code;
        this.savings_acc_no=savings_acc_no;
        this.amount=amount;
        this.date_opened=date_opened;
        this.period_in_months=period_in_months;

    }

    static  getAllFixed_deposits(response){
        pool.query(
            "SELECT * FROM fixed_deposit",
            response
        )
    }

    static getDetailsByCode(fd_id,response){
        pool.query(
            "SELECT * FROM fixed_deposit WHERE fd_id=? ",
            [fd_id],
            response
        )
    }

    createNewFixed_deposit(response) {
        pool.query(
            `INSERT INTO fixed_deposit(customer_id,branch_code,savings_acc_no,amount,date_opened,period_in_months)
            VALUES (?,?,?,?,?,?)`,
            [this.customer_id,this.branch_code,this.savings_acc_no,this.amount,this.date_opened,this.period_in_months],
            response
        )

    }


    static deleteByCode(fd_id, response) {
        pool.query(
            `DELETE FROM fixed_deposit WHERE fd_id = ?`,
            [fd_id],
            response
        )
    }


}

module.exports= Fixed_deposit;

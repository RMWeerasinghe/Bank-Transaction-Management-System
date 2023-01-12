const pool =require("../config/database.js");

class SavingsAccount{

    constructor(branch_code,balance,type,customer_id) {
        this.branch_code=branch_code;
        this.balance=balance;
        this.type=type;
        this.customer_id=customer_id;

    }

    static  getAllAccounts(response){
        pool.query(
            "SELECT * FROM savings_account",
            response
        )
    }

    static getDetailsByAccNo(account_no,response){
        pool.query(
            "SELECT * FROM savings_account WHERE account_no=? ",
            [account_no],
            response
        )
    }

    createNewAccount(response) {
        pool.query(
            `INSERT INTO savings_account(branch_code,balance,type,customer_id)
            VALUES (?,?,?,?)`,
            [this.branch_code,this.balance,this.type,this.customer_id],
            response
        )

    }

    static updateTypeByCustomerID(customer_id,type,response){
        pool.query(
            "UPDATE savings_account set type=? WHERE customer_id=?",
            [type,customer_id],
            response
        )
    }


    static deleteByAccNo(account_no, response) {
        pool.query(
            `DELETE FROM savings_account WHERE account_no = ?`,
            [account_no],
            response
        )
    }


}

module.exports= SavingsAccount;
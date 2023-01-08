const pool =require("../config/database.js");
const Branch = require("./branch.model");

class OnlineTransaction{


    constructor(transaction_id,from_acc,to_acc,amount) {
        this.transaction_id=transaction_id;
        this.from_acc=from_acc;
        this.to_acc=to_acc;
        this.amount=amount;
        this.transaction_time = new Date().toISOString().slice(0,19).replace('T',' ');
    }

    static  getAllOnlineTransactions(response){
        pool.query(
            "SELECT * FROM online_transaction",
            response
        )
    }

    static getOnlineTransactionsByCode(branch_code,response) {
        pool.query("SELECT * FROM online_transaction WHERE from_acc IN (SELECT account_no FROM account_info WHERE branch_code=?) OR to_acc IN (SELECT account_no FROM account_info WHERE branch_code=?) ORDER BY transaction_time",
            [branch_code,branch_code],
            response)
    }

    createNewOnlineTransaction(response) {

        pool.query(
            `INSERT INTO online_loan_application VALUES (?,?,?,?,?)`,
            [this.transaction_id, this.from_acc, this.to_acc, this.amount,this.transaction_id],
            response
        )
    }

    verifyAccountBalance(account_no,amount,result){

    }




}

module.exports= OnlineTransaction;
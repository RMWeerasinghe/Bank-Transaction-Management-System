const pool =require("../config/database.js");
const Branch = require("./branch.model");

class OnlineTransaction{
    static transaction_no =1007;


    constructor(from_acc,to_acc,amount) {
        OnlineTransaction.transaction_no ++;
        this.transaction_id=String(OnlineTransaction.transaction_no);
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
            `INSERT INTO online_transaction VALUES (?,?,?,?,?)`,
            [ this.transaction_id,this.from_acc, this.to_acc, this.amount,this.transaction_time],
            response
        )

    }

    async verifySavingsAccount(){
        const result = await pool.promise().query({sql:'select verifySavingsAccount(?,?)',values:[this.from_acc,this.amount],rowsAsArray:true})
        return Number(result[0][0]);
    }

    transferFromSavings(response){
        pool.query('CALL transferOnline(?,?,?,?)',
            [this.transaction_id,this.from_acc, this.to_acc, this.amount],
            response)
    }

}

module.exports=OnlineTransaction;



const pool =require("../config/database.js");

class TotalTransactions{


    static  getAllTransactions(response){
        pool.query(
            "SELECT * FROM total_transaction",
            response
        )
    }

    static getAllByCode(branch_code,response){
        pool.query(
            "SELECT * FROM total_transaction WHERE from_acc IN (SELECT account_no FROM account_info WHERE branch_code=?) OR (to_acc is not null and to_acc IN (SELECT account_no FROM account_info WHERE branch_code=?)) ORDER BY transaction_time",
                [branch_code,branch_code],
                response
        )
    }

}

module.exports= TotalTransactions;
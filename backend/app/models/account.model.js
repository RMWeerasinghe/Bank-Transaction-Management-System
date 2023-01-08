const pool =require("../config/database.js");

class Account{


    constructor(account_no,type) {
        this.acount_no=account_no;
        this.type=type;
    }

    static  getAllAccounts(response){
        pool.query(
            "SELECT * FROM account",
            response
        )
    }

    static getTypeByNo(account_no,response){
        pool.query(
            "SELECT type FROM account WHERE account_no=? ",
            [account_no],
            response
        )
    }


 
    

    static deleteByNo(account_no, response) {
        pool.query(
            `DELETE FROM account WHERE account_no = ?`,
            [account_no],
            response
        )
    }


}

module.exports= Account;
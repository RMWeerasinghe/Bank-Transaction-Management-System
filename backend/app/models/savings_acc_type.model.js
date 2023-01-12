const pool =require("../config/database.js");

class SavingsAccType{


    constructor(type,interest_rate,min_balance,max_withdrawls) {
        this.type=type
        this.interest_rate=interest_rate
        this.min_balance=min_balance
        this.max_withdrawls=max_withdrawls
    }

    static  getAllTypes(response){
        pool.query(
            "SELECT * FROM savings_acc_type",
            response
        )
    }

    static getDetailsByType(type,response){
        pool.query(
            "SELECT * FROM savings_acc_type WHERE type=? ",
            [type],
            response
        )
    }

    createNewType(response) {
        pool.query(
            `INSERT INTO savings_acc_type
            VALUES (?,?,?,?)`,
            [this.type,this.interest_rate,this.min_balance,this.max_withdrawls],
            response
        )

    }

    static updateIntRateByType(type,interest_rate,response){
        pool.query(
            "UPDATE savings_acc_type set interest_rate=? WHERE type=?",
            [interest_rate,type],
            response
        )
    }


    static deleteByType(type, response) {
        pool.query(
            `DELETE FROM savings_acc_type WHERE type = ?`,
            [type],
            response
        )
    }


}

module.exports= SavingsAccType;
const pool =require("../config/database.js");

class Fd_interest{


    constructor(period_in_months,interest_rate) {
        this.period_in_months=period_in_months;
        this.interest_rate=interest_rate;
    }

    static  getAllFd_interests(response){
        pool.query(
            "SELECT * FROM fd_interest",
            response
        )
    }

    static getDetailsByCode(period_in_months,response){
        pool.query(
            "SELECT * FROM fd_interest WHERE period_in_months=? ",
            [period_in_months],
            response
        )
    }

    createNewFd_interest(response) {
        pool.query(
            `INSERT INTO fd_interest
            VALUES (?,?)`,
            [this.period_in_months,this.interest_rate],
            response
        )

    }


    static deleteByCode(period_in_months, response) {
        pool.query(
            `DELETE FROM fd_interest WHERE period_in_months = ?`,
            [period_in_months],
            response
        )
    }


}

module.exports= Fd_interest;

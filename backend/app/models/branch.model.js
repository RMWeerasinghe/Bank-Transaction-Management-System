const pool =require("../config/database.js");

class Branch{


    constructor(branch_code,branch_name,branch_city,contact_number,email) {
        this.branch_code=branch_code;
        this.branch_name=branch_name;
        this.branch_city=branch_city;
        this.contact_number=contact_number;
        this.email=email;
    }

    static  getAllBranches(response){
        pool.query(
            "SELECT * FROM branch",
            response
        )
    }

    static getDetailsByCode(branch_code,response){
        pool.query(
            "SELECT * FROM branch WHERE branch_code=? ",
            [branch_code],
            response
        )
    }

    createNewBranch(response) {
        pool.query(
            `INSERT INTO branch
            VALUES (?,?,?,?,?)`,
            [this.branch_code,this.branch_name,this.branch_city,this.contact_number,this.email],
            response
        )

    }

    updateContactNoByCode(response){
        pool.query(
            "UPDATE branch set contact_number=?",
            [this.contact_number],
            response
        )
    }

    updateEmailByCode(response){
        pool.query(
            "UPDATE branch set email=?",
            [this.email],
            response
        )
    }

    static deleteByCode(branch_code, response) {
        pool.query(
            `DELETE FROM branch WHERE branch_code = ?`,
            [branch_code],
            response
        )
    }


}

module.exports= Branch;
const pool =require("../config/database.js");

class Individual_customer{


    constructor(customer_id,NIC,first_name,middle_name,last_name,date_of_birth,gender,nationality) {
        this.customer_id=customer_id;
        this.first_name=first_name;
        this.middle_name=middle_name;
        this.last_name=last_name;
        this.date_of_birth=date_of_birth;
        this.gender=gender;
        this.nationality=nationality;
    }

    static  getAllIndividual_customer(response){
        pool.query(
            "SELECT * FROM individual_customer",
            response
        )
    }

    static getDetailsByCode(customer_id,response){
        pool.query(
            "SELECT * FROM individual_customer WHERE customer_id=? ",
            [customer_id],
            response
        )
    }

    createNewIndividual_customer(response) {
        pool.query(
            `INSERT INTO individual_customer
            VALUES (?,?,?,?,?,?,?,?)`,
            [this.customer_id,this.NIC,this.first_name,this.middle_name,this.last_name,this.date_of_birth,this.gender,this.nationality],
            response
        )

    }


    static deleteByCode(customer_id, response) {
        pool.query(
            `DELETE FROM individual_customer WHERE customer_id = ?`,
            [customer_id],
            response
        )
    }


}

module.exports= Individual_customer;

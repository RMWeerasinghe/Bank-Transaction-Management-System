const pool =require("../config/database.js");

class Customer{


    constructor(customer_id,contact_number,email,type,address_no,street,town,hash_password) {
        this.customer_id=customer_id;
        this.contact_number=contact_number;
        this.email=email;
        this.type=type;
        this.address_no=address_no;
        this.street=street;
        this.town=town;
        this.hash_password=hash_password;
    }

    static  getAllCustomers(response){
        pool.query(
            "SELECT * FROM customer",
            response
        )
    }

    static getDetailsByCode(customer_id,response){
        pool.query(
            "SELECT * FROM customer WHERE customer_id=? ",
            [customer_id],
            response
        )
    }

    createNewCustomer(response) {
        pool.query(
            `INSERT INTO customer
            VALUES (?,?,?,?,?,?,?,?)`,
            [this.customer_id,this.contact_number,this.email,this.type,this.address_no,this.street,this.town,this.hash_password],
            response
        )

    }

    updateContactNoByCode(response){
        pool.query(
            "UPDATE customer set contact_number=?",
            [this.contact_number],
            response
        )
    }

    updateEmailByCode(response){
        pool.query(
            "UPDATE customer set email=?",
            [this.email],
            response
        )
    }

    static deleteByCode(customer_id, response) {
        pool.query(
            `DELETE FROM customer WHERE customer_id = ?`,
            [customer_id],
            response
        )
    }


}

module.exports= Customer;

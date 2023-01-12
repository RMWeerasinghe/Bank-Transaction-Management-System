const pool =require("../config/database.js");
const bcrypt = require("bcrypt");

class Customer{
    static salt=10

    constructor(customer_id,contact_number,email,type,address_no,street,town,password) {
        this.customer_id=customer_id;
        this.contact_number=contact_number;
        this.email=email;
        this.type=type;
        this.address_no=address_no;
        this.street=street;
        this.town=town;
        this.hash_password=bcrypt.hashSync(password,Customer.salt);
    }

    static  getAllCustomers(response){
        pool.query(
            "SELECT customer_id,contact_number,email,type,address_no,street,town FROM customer",
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

    static updateContactNoByCode(customer_id,contact_no,response){
        pool.query(
            "UPDATE customer set contact_number=? where customer_id=?",
            [contact_no,customer_id],
            response
        )
    }

    static updatePassword(customer_id,password,response){
        const hash_password=bcrypt.hashSync(password,Customer.salt)
        pool.query(
            "UPDATE customer set hash_password=? where customer_id=? ",
            [hash_password,customer_id],
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

    static findCustomer(customer_id,response){
        pool.query('SELECT * FROM customer where customer_id=?',
            [customer_id],
            response)
    }



}

module.exports= Customer;

const pool =require("../config/database.js");

class OrganizationCustomer{


    constructor(name,reg_no) {
        this.name=name;
        this.reg_no=reg_no;
    }

    static  getAllCustomers(response){
        pool.query(
            "SELECT * FROM organization_customer",
            response
        )
    }

    static getDetailsByID(customer_id,response){
        pool.query(
            "SELECT * FROM organization_customer WHERE customer_id=? ",
            [customer_id],
            response
        )
    }

    createNewOrgCustomer(response) {
        pool.query(
            `INSERT INTO organization_customer(name,reg_no)
            VALUES (?,?)`,
            [this.name,this.reg_no],
            response
        )

    }

    static updateNameByID(customer_id,name,response){
        pool.query(
            "UPDATE organization_customer set name=? WHERE customer_id=?",
            [name,customer_id],
            response
        )
    }


    static deleteByID(customer_id, response) {
        pool.query(
            `DELETE FROM organization_customer WHERE customer_id = ?`,
            [customer_id],
            response
        )
    }


}

module.exports= OrganizationCustomer;
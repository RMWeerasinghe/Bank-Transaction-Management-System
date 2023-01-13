const pool =require("../config/database.js");
const bcrypt=require("bcrypt")

class Employee{
    static salt=8

    constructor(employee_id,emp_name,branch_code,contact_number,email,address_no,street,town,password,salary) {
        this.employee_id=employee_id;
        this.emp_name=emp_name;
        this.branch_code=branch_code;
        this.contact_number=contact_number;
        this.email=email;
        this.address_no=address_no;
        this.street=street;
        this.town=town;
        this.hash_password=bcrypt.hashSync(password,Employee.salt)
        this.salary=salary;
    }

    static  getAllEmployees(response){
        pool.query(
            "SELECT employee_id,emp_name,branch_code,contact_number,email,address_no,street,town,salary FROM employee",
            response
        )
    }

    static getDetailsByCode(employee_id,response){
        pool.query(
            "SELECT * FROM employee WHERE employee_id=? ",
            [employee_id],
            response
        )
    }

    createNewEmployee(response) {
        pool.query(
            `INSERT INTO employee
            VALUES (?,?,?,?,?,?,?,?,?,?)`,
            [this.employee_id,this.emp_name,this.branch_code,this.contact_number,this.email,this.address_no,this.street,this.town,this.hash_password,this.salary],
            response
        )

    }

    static updateContactNoByCode(employee_id,contact_number,response){
        pool.query(
            "UPDATE employee set contact_number=? WHERE employee_id=?",
            [contact_number,employee_id],
            response
        )
    }


    static deleteByCode(employee_id, response) {
        pool.query(
            `DELETE FROM employee WHERE employee_id = ?`,
            [employee_id],
            response
        )
    }
    static updatePassword(employee_id,password,response){
        const hash_password=bcrypt.hashSync(password,Employee.salt)
        pool.query(
            "UPDATE employee set hash_password=? where employee_id=? ",
            [hash_password,employee_id],
            response
        )
    }
    static findEmployee(employee_id,response){
        pool.query('SELECT * FROM employee where employee_id=?',
            [employee_id],
            response)
    }


}

module.exports= Employee;

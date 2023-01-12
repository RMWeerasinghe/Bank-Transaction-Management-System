const Employee=require('../models/employee.model')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const express = require("express");

class EmployeeLoginController{
    static async authenticate(req,res){
        const {employee_id,password}=req.body

        Employee.findEmployee(employee_id,(err,result)=>{
            if (err){
                return res.status(500)
                    .send(err)
            }
            if (result.length==0){
                return res.status(404)
                    .send({error:"not found"})
            }
            else {

                if(bcrypt.compareSync(password,result[0].hash_password)){
                    const data = {
                        employee_id:result.employee_id

                    }
                    const accessToken = jwt.sign(data,process.env.JWT_SECRET_KEY)
                    result.tokens=accessToken
                    res.status(200)
                        .send("Authentication Successful")

                }
                else {
                    res.status(404)
                        .send("Invalid Login")
                }
            }

        })

    }
}

module.exports=EmployeeLoginController
const Customer=require('../models/customer.model')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

class CustomerLoginController{
    static async authenticate(req,res){
        const {customer_id,password}=req.body

        Customer.findCustomer(customer_id,(err,result)=>{
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
                        customer_id:result.customer_id
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

module.exports=CustomerLoginController
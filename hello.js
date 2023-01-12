const pool =require("./backend/app/config/database.js");
const tran = require("./backend/app/models/online_transaction.model.js")
const date = new Date().toISOString().slice(0,19).replace('T',' ');
const bcrypt = require('./backend/node_modules/bcrypt/bcrypt.js')
console.log(date)

const hash = bcrypt.hashSync("customer1",10)
const pass=bcrypt.compareSync("bane",hash)
const tran1=new tran("1005","1810015001","1810015002",1000)

console.log(hash)
console.log(pass)



console.log("hello");


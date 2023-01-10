const pool =require("./backend/app/config/database.js");
const tran = require("./backend/app/models/online_transaction.model.js")
const date = new Date().toISOString().slice(0,19).replace('T',' ');
console.log(date)


const tran1=new tran("1005","1810015001","1810015002",1000)
const foo=tran1.transferFromSavings().then();
console.log(foo)



console.log("hello");


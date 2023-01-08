const pool =require("./backend/app/config/database.js");
const date = new Date().toISOString().slice(0,19).replace('T',' ');
console.log(date)
console.log("hello");


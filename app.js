import express from 'express';
import mysql from 'mysql';
const app = express();
app.use(express());
const PORT = 3000;

let con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"node-orm"
})



con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.listen(PORT, ()=>{
    console.log('server running on',PORT);
})
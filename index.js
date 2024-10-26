let express = require("express");
let app = new express();  
app.set("view engine","ejs");

// set up database connection
const knex = require("knex")({
 client: "mysql",
 connection: {
  host:"concert-db.c61dq6ysma4i.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "DeganPassword1",
  database:"paradise-concerts",
  port: 3306,
 },
});

app.get("/",(req,res) => {
 knex
 .select()
 .from("venues")
 .then((results) => {
   res.render("index",{aConcerts: results});
 }); 
});
app.listen(3000);

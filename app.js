const express = require('express')
const mongoose = require('mongoose')
const route1 = require('./route/index')
const route2 = require('./route/todo')
const connString = require('./model/db')

const app = express()
require('dotenv').config()

//connection to mongoDB
const isProduction = process.env.NODE_ENV === "production";
const mongoURI = isProduction
  ? process.env.MONGODB_URI
  : "mongodb://localhost:27017/todolist";

if (!mongoURI || typeof mongoURI != 'string') {
    throw new Error("MONGODB_URI environment variable is not defined");
    process.exit(1);
}

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

//Middlewares
app.use(express.urlencoded({extended : true}))
app.use(express.static("public"))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));


//route
app.use(route1)
app.use(route2)

//server configuration...
app.listen(3000, ()=>{
    console.log("Server started successfully")
})
const express = require('express')
const mongoose = require('mongoose')
const route1 = require('./route/index')
const route2 = require('./route/todo')

const app = express()

//connection to mongoDB
mongoose.connect("mongodb://localhost/todo_list")

//Middlewares
app.use(express.urlencoded({extended : true}))
app.use(express.static("public"))
app.set("view engine", "ejs")


//route
app.use(route1)
app.use(route2)

//server configuration...
app.listen(3000, ()=>{
    console.log("Server started successfully")
})
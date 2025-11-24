const express = require("express")
const Sequelize = require("sequelize")
const bodyParser = require('body-parser');
const { body, validationResult } = require("express-validator")

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = 9000

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql"
});

app.post("/save-data",
    [
        body("name").notEmpty(),
        body("email").isEmail(),
        body("password").notEmpty()
    
], async(req,res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }

    res.status(200).json({
        success:"Successful Sign Up!",
        data: req.body
    })
})

app.get("/",async(req,res) => {
    res.send("Hello world")
    try{
        await sequelize.authenticate()
        console.log("Connection has been established successfully")
    }
    catch(error){
        console.log("Unable to connect:" , error)
    }
})

app.listen(PORT,(error) => {
    console.log("Hello world again34")
})
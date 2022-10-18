const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const ejs = require('ejs')
const dotenv = require('dotenv')
const User = require('./User');

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

dotenv.config()

mongoose.connect(process.env.URI)

app.get("/", function(req, res){
    res.render("home")
})

app.post("/" ,(req, res)=>{
    var fName = req.body.fName
    var lName = req.body.lName
    var age = req.body.age
    var street = req.body.street
    var city = req.body.city
    var pincode = req.body.pincode
    // console.log(inpname);
    async function createUser() {
        const user = await User.create({
            name: {
                fName: fName,
                lName: lName
            },
            age: age,
            address: {
                street: street,
                city: city,
                pincode: pincode
            }
        })
    
        // user.name = "new updated name"
        // await user.save()
    
        // const user = new User({
        // name: "olq",
        //     age: 23
        //  })
        // await user.save()
        console.log(user);
    }
    createUser()
    
res.render("sucess")
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server started on port 3000");
})
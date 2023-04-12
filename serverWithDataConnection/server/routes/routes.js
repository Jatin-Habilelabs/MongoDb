const express = require('express');
const app = express()
const User =require("../model/user")
const {middleware}=require("../middleware/middleware")
app.get('/get',(req,res) => {
    res.send("in the router file")
})


app.use(middleware)

app.post('/user',middleware, (req,res) => {
    console.log('>serverWithDatabase | [routes.js] > #10 | req.body : ', req.body);
const user=new User({
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone
});
const saveData=user.save();
res.json("saveData");

})


module.exports = app;
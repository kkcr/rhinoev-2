'use strict'

const express = require('express')
const app = express()
const port = 3000
const bosyparser = require("body-parser");
const Razorpay = require('razorpay');
const { log } = require('console');
app.use(require("body-parser").json());
var instance = new Razorpay({
    key_id: 'YOUR_KEY_ID', // Razorpay keys
    key_secret: 'YOUR_KEY_SECRET', // Razorpay keys
});

app.get('/',(req,res)=>{
    res.sendFile("index.html",{root:__dirname});
})

app.post('/create/orderId',(req,res)=>{
    console.log("create orderId request",req.body);
    var options = {
        amount: req.body.amount,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "rcp1"
      };
      instance.orders.create(options, function(err, order) {
        console.log(order);
        res.send({orderId : order.id});
      });
})


app.post("/api/payment/verify",(req,res)=>{
    let body=req.body.response.razorpay_order_id +"|"+req.body.razorpay_payment_id;
    var crypto = require("crypto");
        var expectedSignature = crypto.createHmac('sha256','Work5mJv2F0pa5HKLeXZfUr9r').update(body.toString).digest('hex');
        console.log("sig received",req.body.response.razorpay_signature);
        console.log("sig generated",expectedSignature);
    var response = {"signatureIsValid":"false"}
    if(expectedSignature==req.body.response.razorpay_signature)
        response={"signatureIsValid":"true"}
            res.send(response);
});

app.listen(port,()=>{
    console.log(`Port listening on ${port}`)
})
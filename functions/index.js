const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IzaPHSEGCtGosFsK3Vs2VfSCjgpRfzWTIS5mR3E9Sdt1uDopR1Wqt8H2ogBj34fRprRdHK4Kad2urNG6C9vDsOQ00vkp9U7fW");


//API


// - App Config
const app = express();

//Middlewares

app.use(cors({origin:true}));
app.use(express.json());


//- API routes

app.get("/" , (request , response) => {
  response.status(200).send("Hello world");
})

app.post("/payments/create" , async (request , response) => {

  const total = request.query.total;
  console.log("payment request received" ,  total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount:total,
    currency:"usd"
  });
 
  //OK-Created
  response.status(201).send({
    clientSecret:paymentIntent.client_secret
  });


});


//- Listen command

exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-37ceb/us-central1/api
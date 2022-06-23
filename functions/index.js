const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")('sk_test_51LCiWcFdRVVKiVDJ2D1o9yyyRHd7ig4claIIOOxFq3c9YGfKrlyi21vZBXJ6ikp51ngCVPeMHIVAEhTFZZYeOSnE00UcGcFPdP')


// API 

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('Hello World'))

app.post('/payments/create', async(request, response) => {
  const total = request.query.total;

  console.log('Payment total >> ', total)

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,    // currency subunits i.e cents
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.clientSecret,
  })
})

// example api endpoint from express server
// http://localhost:5001/clone-e178e/us-central1/api
// from firebase emulators:start and disabling AirPlay Receiver in System Preferences > Sharing

// Listen command
exports.api = functions.https.onRequest(app)
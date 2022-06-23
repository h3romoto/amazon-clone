const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51LCiWcFdRVVKiVDJ2D1o9yyyRHd7ig4claIIOOxFq3c9YGfKrlyi21vZBXJ6ikp51ngCVPeMHIVAEhTFZZYeOSnE00UcGcFPdP')


// API 

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json());

// API routes

// Listen command

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

  
app.use(cors({
  origin: 'https://jarsthesis-title-generator.vercel.app', 
  methods: ['POST'],
  credentials: true 
}));

// Routes
const ThesisRoute = require("./route/Thesisroute");
app.use('/ai/generate', ThesisRoute);

// Start server
app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${port}`);
});


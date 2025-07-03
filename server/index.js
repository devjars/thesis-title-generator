const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

app.use(cors({
  methods: ['POST'],
  origin: ['http://localhost:5173'], 
}));

// Routes
const ThesisRoute = require("./route/Thesisroute");
app.use('/ai/generate', ThesisRoute);

// Start server
app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${port}`);
});

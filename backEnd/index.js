const express = require("express");
const cors = require("cors");
const port = 5000;
const app = express();

const db = require("./mongoDB/index.js");


app.use(cors());
app.use(express.json())
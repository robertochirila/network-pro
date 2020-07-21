const express = require("express");
const cors = require("cors");
const config = require("./config/default.json");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());


const uri =
  "mongodb+srv://robertochirila:robertomircea@cluster0-bnujd.gcp.mongodb.net/network-pro-db?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connection to MongoDB established");
});

app.use(express.json());

const tasksRouter = require("./routes/tasks");
//const usersRouter = require('./routes/users')
//const authRouter = require('./routes/auth')

app.use("/tasks", tasksRouter);
//app.use('/users', usersRouter)
//app.use('/auth', authRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

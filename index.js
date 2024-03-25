const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const authRouter = require("./routes/authRoute");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

const app = express().use(bodyParser.json());
const PORT = process.env.PORT;

app.use(express.json());

//----------Database Connection--------------//
dbConnect();

//----------Get Method----------------------//
app.get("/", (req, res) => {
  res.status(200).send("Hello welcome");
});

app.use("/api/user", authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Port Listeing on ${PORT} ...!`);
});

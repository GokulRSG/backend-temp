const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Database Connected Successfully...!");
    })
    .catch((error) => {
      console.log("Database Error...", error);
    });
};

module.exports = dbConnect;

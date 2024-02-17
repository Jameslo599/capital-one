const express = require("express");
const app = express();
const connectDB = require("./config/database");
const accountRoutes = require("./routes/accounts");

require("dotenv").config({ path: "./config/.env" });

connectDB();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", accountRoutes);

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running on port 8000");
});

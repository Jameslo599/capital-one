const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const logger = require("morgan");
const connectDB = require("./config/database");
const accountRoutes = require("./routes/accounts");
const cloudinary = require("cloudinary").v2;

require("dotenv").config({ path: "./config/.env" });

// Return "https" URLs by setting secure: true
cloudinary.config({
  cloud_name: "dfa89qx8v",
  api_key: "764186995544751",
  api_secret: `${process.env.CLOUDINARY_SECRET}`,
  secure: true,
});

// Passport config
require("./config/passport")(passport);
// Log the configuration
console.log(cloudinary.config());

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
app.use(logger("dev"));
// Sessions
app.use(
  session({
    secret: "ewhf",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      client: mongoose.connection.getClient(),
      dbName: "capital-one",
    }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", accountRoutes);

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running on port 8000");
});

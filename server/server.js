const express = require("express");
const app = express();
const connectDB = require("./config/database");
const accountsController = require("./controllers/accounts");

require("dotenv").config({ path: "./config/.env" });

connectDB();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api", accountsController.getAccount);

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running on port 8000");
});

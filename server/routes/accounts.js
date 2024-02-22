const express = require("express");
const router = express.Router();
const accountsController = require("../controllers/accounts");

router.get("/user/:id", accountsController.getAccount);
router.post("/login", accountsController.loginAccount);
router.post("/create", accountsController.createAccount);

module.exports = router;

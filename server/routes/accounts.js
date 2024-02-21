const express = require("express");
const router = express.Router();
const accountsController = require("../controllers/accounts");

router.get("/", accountsController.getAccount);
router.post("/create", accountsController.createAccount);

module.exports = router;

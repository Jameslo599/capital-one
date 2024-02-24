const express = require("express");
const router = express.Router();
const accountsController = require("../controllers/accounts");
const authController = require("../controllers/auth");
const { ensureAuth } = require("../middleware/auth");

router.get("/user/:id", accountsController.getAccount);
router.post("/login", accountsController.loginAccount);
//router.get("/create", authController.getSignup);
router.post("/create", authController.postSignup);

module.exports = router;

const express = require("express");
const router = express.Router();
const accountsController = require("../controllers/accounts");
const authController = require("../controllers/auth");
const emailController = require("../controllers/email");
const { ensureAuth } = require("../middleware/auth");

router.get("/user/:id", ensureAuth, accountsController.getAccount);
router.post("/login", authController.postLogin);
router.post("/create", authController.postSignup);
router.post("/forgot", authController.postForgot);

//Login management
router.post("/email", emailController.emailUsername);

module.exports = router;

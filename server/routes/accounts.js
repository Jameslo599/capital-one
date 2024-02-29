const express = require("express");
const router = express.Router();
const accountsController = require("../controllers/accounts");
const authController = require("../controllers/auth");
const emailController = require("../controllers/email");
const { ensureAuth } = require("../middleware/auth");

router.get("/user/:id", ensureAuth, accountsController.getAccount);
router.post("/login", authController.postLogin);
router.post("/create", authController.postSignup);

//Account user/password management
router.post("/forgot", authController.postForgot);
router.post("/email", emailController.postEmailUsername);
router.put("/reset/:username", authController.putResetPassword);

module.exports = router;

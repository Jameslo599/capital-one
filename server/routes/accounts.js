const express = require("express");
const router = express.Router();
const accountsController = require("../controllers/accounts");
const authController = require("../controllers/auth");
const emailController = require("../controllers/email");
const { ensureAuth } = require("../middleware/auth");

router.get("/user/:id", ensureAuth, accountsController.getAccount);
router.post("/login", authController.postLogin);
router.get("/getlogged?", authController.getLogged);
router.delete("/session", authController.logout);
router.post("/create", authController.postSignup);

//Account user/password management
router.post("/forgot", authController.postForgot);
router.post("/email", emailController.postEmailUsername);
router.put("/reset/:username/:today-:hash", authController.putResetPassword);

module.exports = router;

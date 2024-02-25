const express = require("express");
const router = express.Router();
const accountsController = require("../controllers/accounts");
const authController = require("../controllers/auth");
const { ensureAuth } = require("../middleware/auth");

router.get("/user/:id", ensureAuth, accountsController.getAccount);
router.post("/login", authController.postLogin);
router.post("/create", authController.postSignup);
router.post("/forgot", authController.postForgot);

module.exports = router;

const express = require("express");
const router = express.Router();
const accountsController = require("../controllers/accounts");
const authController = require("../controllers/auth");
const emailController = require("../controllers/email");
const { ensureAuth } = require("../middleware/auth");
const upload = require("../middleware/multer");

router.get("/user", ensureAuth, accountsController.getAccount);
router.post("/login", authController.postLogin);
router.get("/getlogged?", authController.getLogged);
router.delete("/session", authController.logout);
router.post("/create", authController.postSignup);

//Account username/password management
router.post("/forgot", authController.postForgot);
router.post("/email", emailController.postEmailUsername);
router.put("/reset/:username/:today-:hash", authController.putResetPassword);

//Account information management
router.post("/avatar", upload.single("file"), accountsController.postAvatar);
router.put("/update/greeting", accountsController.putGreeting);
router.put("/update/address", accountsController.putAddress);

module.exports = router;

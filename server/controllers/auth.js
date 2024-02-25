const passport = require("passport");
const validator = require("validator");
const Account = require("../models/Account");

exports.postLogin = (req, res, next) => {
  const validationErrors = [];
  if (validator.isEmpty(req.body.userName))
    validationErrors.push({ msg: "Username cannot be blank." });
  if (validator.isEmpty(req.body.password))
    validationErrors.push({ msg: "Password cannot be blank." });

  if (validationErrors.length) {
    return res.status(400).json(validationErrors);
  }

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json(info);
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.status(200).json("Success! Logging in...");
    });
  })(req, res, next);
};

exports.logout = (req, res) => {
  req.logout(() => {
    console.log("User has logged out.");
  });
  req.session.destroy((err) => {
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err);
    req.user = null;
    res.redirect("/");
  });
};

exports.postSignup = async (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address" });
  if (!validator.isLength(req.body.password, { min: 8 }))
    validationErrors.push({
      msg: "Password must be at least 8 characters long",
    });
  if (!validator.isStrongPassword(req.body.password))
    validationErrors.push({
      msg: "Password must contain at least 8 characters and include at least 1 lowercase, uppercase, number and symbol",
    });
  if (!validator.isAfter(req.body.dob, { comparisonDate: "1910-01-01" }))
    validationErrors.push({
      msg: "Date of birth must be after 1/1/1910",
    });

  if (validationErrors.length) {
    return res.status(400).json(validationErrors);
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  const user = new Account({
    userName: req.body.userName,
    password: req.body.password,
    email: req.body.email,
    fname: req.body.fname,
    lname: req.body.lname,
    dob: req.body.dob,
    balance: req.body.balance,
  });
  try {
    const existingUser = await Account.findOne(
      { email: req.body.email } || { userName: req.body.userName }
    );
    if (existingUser) {
      return res
        .status(400)
        .json("Account with that email address or username already exists.");
    }
    await Account.create(user);
    await req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      res.status(200).json(user.userName);
    });
  } catch (error) {
    console.log(error);
  }
};

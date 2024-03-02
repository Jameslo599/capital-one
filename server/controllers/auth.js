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
  req.logout((err) => {
    if (err) res.status(400).json("Error logging out");
    res.status(200).json("User has logged out.");
  });
  console.log(req.session);
  //   req.session.destroy((err) => {
  //     if (err)
  //       res
  //         .status(400)
  //         .json("Error : Failed to destroy the session during logout.");
  //     req.user = null;
  //     //console.log(req.session);
  //     //res.status(200).json("User has logged out.");
  //   });
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
  if (!validator.isBefore(req.body.dob))
    validationErrors.push({
      msg: "Date of birth must be today or before today",
    });
  if (!validator.isNumeric(req.body.balance))
    validationErrors.push({
      msg: "Balance must only contain numbers",
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
    fname: req.body.fname.toLowerCase(),
    lname: req.body.lname.toLowerCase(),
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

exports.postForgot = async (req, res) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address" });
  if (!validator.isAlpha(req.body.lname))
    validationErrors.push({
      msg: "Last name should contain letters only",
    });
  if (!validator.isAfter(req.body.dob, { comparisonDate: "1910-01-01" }))
    validationErrors.push({
      msg: "Date of birth must be after 1/1/1910",
    });
  if (!validator.isBefore(req.body.dob))
    validationErrors.push({
      msg: "Date of birth must be today or before today",
    });

  if (validationErrors.length) {
    return res.status(400).json(validationErrors);
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  try {
    const query = Account.where({
      email: req.body.email,
      lname: req.body.lname.toLowerCase(),
      dob: req.body.dob,
    });
    const existingUser = await query.findOne();
    if (existingUser) {
      return res.status(200).json(existingUser.userName);
    }
    res.status(400).json("An Account does not exist with given information");
  } catch (error) {
    console.log(error);
  }
};

exports.putResetPassword = async (req, res) => {
  const validationErrors = [];
  if (!validator.isStrongPassword(req.body.password))
    validationErrors.push({
      msg: "Password must contain at least 8 characters and include at least 1 lowercase, uppercase, number and symbol",
    });
  if (!validator.equals(req.body.password, req.body.confirm))
    validationErrors.push({
      msg: "Passwords do not match",
    });

  if (validationErrors.length) {
    return res.status(400).json(validationErrors);
  }

  try {
    const query = Account.where({
      userName: req.params.username.toLowerCase(),
    });
    const existingUser = await query.findOne();
    if ((existingUser.password = req.body.password))
      return res
        .status(400)
        .json("New password cannot be identical to the last password");
    existingUser.password = req.body.password;
    if (existingUser) {
      existingUser.save();
      return res.status(200).json("Your password has been updated!");
    }
    res.status(400).json("An Account does not exist with given information");
  } catch (error) {
    console.log(error);
  }
};

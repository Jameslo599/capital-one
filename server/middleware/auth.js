module.exports = {
  ensureAuth: function (req, res, next) {
    console.log(req.session.passport.user);
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.status(403).json(null);
    }
  },
};

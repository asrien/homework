// checkLogin 미들웨어 함수
const checkLogin = (req, res, next) => {
  if (!req.session.loggedIn) {
    return res.redirect("/login");
  }
  next();
};

module.exports = checkLogin;

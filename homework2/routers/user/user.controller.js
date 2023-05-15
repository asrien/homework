let join = (req, res) => {
  res.render("./user/join.html");
};

let login = (req, res) => {
  res.render("./user/login.html");
};

let login_check = async (req, res) => {
  let userid = req.body.userid;
  let userpw = req.body.userpw;

  let result = await User.findOne({
    where: { userid, userpw },
  });

  req.session.uid = userid;
  req.session.isLogin = true;

  req.session.save(() => {
    res.redirect("/");
  });
};

let join_success = async (req, res) => {
  let userid = req.body.userid;
  let userpw = req.body.userpw;
  let username = req.body.username;
  let gender = req.body.gender;

  await User.create({
    userid,
    userpw,
    username,
    gender,
  });

  res.render("./user/join_success.html", {
    userid,
    userpw,
    username,
    gender,
  });
};

module.exports = {
  join,
  join_success,
  login,
};

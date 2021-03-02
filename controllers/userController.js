import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "JOIN" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400); //bad request
    res.render("join", { pageTitle: "JOIN" });
  } else {
    //To do : Register user
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (err) {
      console.log(err);
      res.redirect(routes.home);
    }
    //To do : User Login
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "LOG IN" });

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

export const githubLogin = passport.authenticate("github");

//export const githubLoginCallback = async(accessToken, refreshToken, profile, cb) => {
export const githubLoginCallback = async (_, __, profile, cb) => {
  // 어떤 variable 필요 없을때 저런식으로 쓴다 함
  console.log(profile, cb);
  const {
    _json: { id, avatar_url, name, email },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    } else {
      const newUser = await User.create({
        email,
        name,
        githubId: id,
        avatarUrl: avatar_url,
      });
      return cb(null, newUser);
    }
  } catch (error) {
    return cb(error);
  }
};

export const postGithubLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  //To do : process log out
  req.logout();
  res.redirect(routes.home);
};

//export const users = (req, res) => res.render(routes.users);
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "USER DETAIL" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "EDIT PROFILE" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "CHANGE PW" });

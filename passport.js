import passport from "passport";
import GitHubStrategy from "passport-github";
import { githubLoginCallback } from "./controllers/userController";
import User from "./models/User";
import routes from "./routes";

passport.use(User.createStrategy()); // strategy 설정 passport-local의 LocalStrategy를 사용할 것. Shortcut

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRETS,
      redirect_uri: `http://127.0.0.1:4000$${routes.githubCallback}`,
    },
    githubLoginCallback // 사용자가 github에서 돌아왔을 때 실행되는 함수
  )
);

// passport.serializeUser(User.serializeUser()); // cookie에는 userId만 담도록
// passport.deserializeUser(User.deserializeUser());
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

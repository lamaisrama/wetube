import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy()); // strategy 설정 passport-local의 LocalStrategy를 사용할 것. Shortcut
passport.serializeUser(User.serializeUser()); // cookie에는 userId만 담도록
passport.deserializeUser(User.deserializeUser());

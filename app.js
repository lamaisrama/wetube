import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

import "./passport";

const app = express();
const CookieStore = MongoStore(session);

app.use(helmet()); //applicatio이 더 안전하도록 만들어줌
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
// express.static()은 middleware function으로, /uploads로 파일이 들어오면, directory에서 file을 전달해주는 기능을 함.
app.use(cookieParser()); //cookie를 전달받아서 사용할 수 있도록 만들어주는 미들웨어, 사용자 인증같은 곳에서 쿠키 검사시 사용
app.use(bodyParser.json()); //form, json 형태로 된 body를 검사. 사용자가 웹사이트로 전달하는 정보들 검사하는 미들웨어
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev")); //application에서 발생하는 모든 일들을 logging
//morgan에는 여러 모드 있음 - tiny, combined, common, dev, short.

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUnitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

//locals라는 미들웨어 만들 것 -- logal 변수를 global로 사용할 수 있도록 해주는 것
app.use(localsMiddleware);
//globalRouter
app.use(routes.home, globalRouter);
//user에 접속하면 userRouter 전체를 쓰겠다는 뜻
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
//누가 app을 부르면 app object를 주겠다는 뜻
export default app;

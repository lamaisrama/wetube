import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();

const handleListening = () => console.log(`Listening on : http://127.0.0.1:${PORT} 💚`);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(logger("dev")); //morgan에는 여러 모드 있음 - tiny, combined, common, dev, short.


//globalRouter
app.use(routes.home, globalRouter);
//user에 접속하면 userRouter 전체를 쓰겠다는 뜻
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

//누가 app을 부르면 app object를 주겠다는 뜻
export default app;
import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {userRouter} from "./router"; 

const app = express();

const handleListening = () => console.log(`Listening on : http://127.0.0.1:${PORT} 💚`);

const handleHome = (req, res) => res.send('Hello World!')

const handleProfile = (req, res) => res.send("This is my profile!")


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(logger("dev")); //morgan에는 여러 모드 있음 - tiny, combined, common, dev, short.


app.get('/', handleHome);

app.get('/profile', handleProfile);

//user에 접속하면 userRouter 전체를 쓰겠다는 뜻
app.use('/user', userRouter)


//누가 app을 부르면 app object를 주겠다는 뜻
export default app;
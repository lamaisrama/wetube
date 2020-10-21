import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on : http://127.0.0.1:${PORT} 💚`);

const handleHome = (req, res) => res.send('Hello World!')

const handleProfile = (req, res) => res.send("This is my profile!")

const betweenHome = (req, res, next) => {
    console.log("I'm between!");
    next();
}

//app.use(betweenHome);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(logger("dev")); //morgan에는 여러 모드 있음 - tiny, combined, common, dev, short.

//const middleware = (req, res, next) => {
//   res.send("not happennig"); //send를 미들웨어가 보내면 connection을 끊음
//}

app.get('/', handleHome);

app.get('/profile', handleProfile);


app.listen(PORT, handleListening);
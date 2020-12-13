
//app object 를 init.js에게 줘야함
//ES6 have exciting. 다른 파일의 코드를 모듈로 가져다 쓸 수 있음.
import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const PORT=process.env.PROT || 4000;

const handleListening = () => console.log(`✅ Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
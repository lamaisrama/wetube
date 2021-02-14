import dotenv from "dotenv";
import "./db";
import path from "path";
import app from "./app";

dotenv.config();

import "./models/Video";
import "./models/User";

//app object 를 init.js에게 줘야함
//ES6 have exciting. 다른 파일의 코드를 모듈로 가져다 쓸 수 있음.

const PORT = process.env.PROT || 4000;

const handleListening = () => {
  console.log(path.resolve(__dirname, "assets", "js", "main.js"));
  console.log(`✅ Listening on : http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);

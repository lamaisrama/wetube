import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on : http://127.0.0.1:${PORT} 💚`);

const handleHome = (req, res) => res.send('Hello World!')

const handleProfile = (req, res) => res.send("This is my profile!")

const betweenHome = (req, res, next) => {
    console.log("I'm between!");
    next();
}
//하나의 라우터에만 middleware 적용
//app.get('/', betweenHome,handleHome);
//
app.use(betweenHome);
app.get('/', handleHome);

app.get('/profile', handleProfile);


app.listen(PORT, handleListening);
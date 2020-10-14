import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on : http://127.0.0.1:${PORT} 💚`);
const handleHome = (req, res) => res.send('Hello World!')

app.listen(PORT, handleListening);

app.get('/', handleHome)



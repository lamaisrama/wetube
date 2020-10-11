const express = require('express')
const app = express()

const PORT = 4000;

function handleListening () {
    console.log(`Listening on : http://127.0.0.1:${PORT} 💚`);
}

app.listen(PORT, handleListening);

// respond with 'hello world ' when a GET req is made to the homepage
app.get('/', function(req, res){
    res.send('hello world')
})

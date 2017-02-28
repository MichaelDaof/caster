const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const request = require('request')

require('./player-server');

const PORT = 3000;

app.get('/yt/:video', function(req, res) {
    const video = req.params.video;
    console.log(`app received video: ${video}`)
    res.send(`App Received ${video}`)
    request(`http://localhost:3001/yt/${video}`)
})


// server.listen(PORT, () => {
//   console.log(`Client server on port ${PORT}`)
// })

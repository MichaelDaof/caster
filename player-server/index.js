const express = require('express');
const path = require('path')
const opn = require('opn');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PLAYER_PORT = 3001;

let playerSocket;

app.use(express.static(path.resolve(__dirname, '..')))
app.get('/yt/:video', (req, res) => {
  const video = req.params.video;
  console.log(`player received video: ${video}`)
  res.send(`Player Received ${video}`)
  playerSocket.emit('video', video)
})

io.on('connection', (socket) => {
  playerSocket = socket;
  socket.on('up', (payload) => {
    socket.emit('msg', `We see you\'re "${payload}"`)
  })
})

server.listen(PLAYER_PORT, (err) => {
  console.log('Host server listening on 3001', err)
  opn('http://localhost:3001/player-server')
})
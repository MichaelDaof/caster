const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const request = require('request')

const configServer = require('./server');
const configSocket = require('./socket').configSocket;

const PLAYER_PORT = 3001;

app.use(express.static(path.resolve(__dirname, '..')))
configServer(app)
configSocket(io)

server.listen(PLAYER_PORT, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Player server listening on 3001')
  }

  // Forced browser launch... still underdetermined as to w
  request(`http://localhost:3001/init`)

})
  
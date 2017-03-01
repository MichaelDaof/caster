let playerSocket;

module.exports = {
  configSocket,
  playerSocket
}

function configSocket(io) {

  io.on('connection', onConnect)

}

function onConnect (socket) {
  socket.on('up', (payload) => {
    socket.emit('msg', `We see you\'re "${payload}"`)
    module.exports.playerSocket = socket;
  })
}


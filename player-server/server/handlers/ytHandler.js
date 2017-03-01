
module.exports = (req, res) => {
  const video = req.params.video;
  const videoSrc = `https://www.youtube.com/embed/${video}?autoplay=1`;
  const playerSocket = require('../../socket').playerSocket;

  if (playerSocket) {
    console.log(`player received video id: ${video}`)

    res.send(`Player Received ${video}`)
    playerSocket.emit('video', videoSrc)
  } else {
    // create new player
    res.send('You gotta start the player with /init')
  }

}
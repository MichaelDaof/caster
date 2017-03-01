const opn = require('opn');

module.exports = (req, res) => {
  opn('http://localhost:3001/player-server');
  res.end();
}
// Import request handlers
const init = require('./handlers/init');
const getIpHandler = require('./handlers/getIp')
const ytHandler = require('./handlers/ytHandler');


module.exports = configServer;

function configServer(app) {

  app.get('/init', init)
  app.get('/getIp', getIpHandler)
  app.get('/yt/:video', ytHandler)


}

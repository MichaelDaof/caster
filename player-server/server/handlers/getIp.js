/**
 * Should this functionality be done server-side, then templated
 * into host-client, as oppose to being a call made by host-client?
 */

const ip = require('ip');

module.exports = (req, res) => {
  // respond with IP
  const localIp = JSON.stringify(ip.address());
  res.json(localIp)
}
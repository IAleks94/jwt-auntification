const jwt = require('express-jwt');
const config = require('../config');

const getTokenFromHeader = (req) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  } else if (req.body && req.body.token) {
    return req.body.token;
  }
  return null;
};

module.exports = jwt({
  secret: config.secretKey,
  algorithms: ['HS256'],
  credentialsRequired : false, 
  requestProperty: 'token', // this is where the next middleware can find the encoded data generated in services/auth:generateToken
  getToken: getTokenFromHeader
});

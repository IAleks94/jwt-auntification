const AuthService = require('../services/auch.js');

async function activeUser(req, res, next) {
  try {
    const authService = new AuthService();
    await authService.activateUser(req.body);
    return res.send('now you active');
  } catch (e) {
    return res.json(e).status(500).end();
  }
}

module.exports = activeUser;
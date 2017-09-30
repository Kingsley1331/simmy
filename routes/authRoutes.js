const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  /**
    send the token on back to google through passport /auth/google/callback?code=token
    token gets exchanged for the user profile
  **/
  app.get('/auth/google/callback', passport.authenticate('google'));

  // the logout method is attched by passport, logout destroys the cookie
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  // the user model instance is attatched to the req object by passport and sent back to the client
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

};

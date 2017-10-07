const session = require('./Modules/InitializeSession');
module.exports = function(app){
  app.get('/',session.Initialization);
  app.post('/login', session.login);
  app.get('/home',session.home);
  app.get('/logout',session.logout);
};

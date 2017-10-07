//InitializeSession Session
exports.Initialization = function(req, res, next){
    var session=req.session;
    //Session set when user Request our app via URL
    session.email;
    if(session.email) {
      /*
      * if Session is exists.
      * It will redirect to the home Page
      */
       res.redirect('/home');
    }
    else {
      res.sendfile('index.html');
    }
}
  /*
  Assign email value into Session object after the Enter the user name
  */
exports.login = function (req, res, next){
  var session = req.session;
  console.log(session)
  session.email=req.body.email;
  console.log( session.email)
  res.end('done');
}
  /*
   Check if the user exists in session Object
  */
exports.home = function (req, res, next){
  var session = req.session;
    console.log(session)
    if(session.email) {
    res.write(`
             <div>
               <h1>Successfully Logged In</h1>
               <h3>Welcome ${session.email} </h3>
             </div>
           `);
    res.end('<a href="/logout">Logout</a>');
    } else {
        res.write(`
         <h1>Please login.</h1>
        `);
        res.end('<a href="/">Login</a>');
    }
}
 /*
  destroy the Session Object
  */
exports.logout = function(req, res, next){
  req.session.destroy(function(err) {
    if(err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
}
